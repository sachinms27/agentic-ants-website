import type { NextApiRequest, NextApiResponse } from 'next';
import { sendContactFormEmails } from '../../src/lib/email/service';
import { ContactFormData } from '../../src/lib/email/templates';

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (data.resetTime < now) {
      rateLimitStore.delete(ip);
    }
  }
}, 3600000);

function getRateLimitInfo(ip: string): { count: number; resetTime: number } {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetTime < now) {
    const resetTime = now + 3600000; // 1 hour from now
    const info = { count: 1, resetTime };
    rateLimitStore.set(ip, info);
    return info;
  }

  existing.count++;
  return existing;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      error: 'Only POST requests are accepted',
    });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_API_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Get client IP for rate limiting
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
                     req.socket.remoteAddress ||
                     'unknown';

    // Check rate limit (5 requests per hour per IP)
    const rateLimitInfo = getRateLimitInfo(clientIp);
    if (rateLimitInfo.count > 5) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests',
        error: 'Please wait before submitting another request',
      });
    }

    // Validate request body
    const { name, email, company, agentCount, useCase }: ContactFormData = req.body;

    // Required field validation
    if (!name || !email || !company) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        error: 'Name, email, and company are required',
      });
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 100 || company.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input',
        error: 'Field values are too long',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email',
        error: 'Please provide a valid email address',
      });
    }

    // Sanitize input data
    const sanitizedData: ContactFormData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 100),
      company: company.trim().substring(0, 100),
      agentCount: agentCount?.trim().substring(0, 50),
      useCase: useCase?.trim().substring(0, 500),
    };

    // Send emails
    const result = await sendContactFormEmails(sanitizedData);

    // Return appropriate response
    if (result.success) {
      return res.status(200).json(result);
    } else {
      // Don't expose internal errors to client
      return res.status(500).json({
        success: false,
        message: 'Failed to send your message',
        error: process.env.NODE_ENV === 'development' ? result.error : 'Please try again later',
      });
    }
  } catch (error) {
    console.error('API Error:', error);

    // Return generic error message
    return res.status(500).json({
      success: false,
      message: 'An error occurred',
      error: process.env.NODE_ENV === 'development'
        ? (error instanceof Error ? error.message : 'Unknown error')
        : 'Please try again later',
    });
  }
}