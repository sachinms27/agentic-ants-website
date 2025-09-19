import { transporter, emailConfig } from './config';
import { ContactFormData, customerEmailTemplate, salesTeamEmailTemplate } from './templates';

export interface EmailResult {
  success: boolean;
  message: string;
  error?: string;
}

export async function sendContactFormEmails(data: ContactFormData): Promise<EmailResult> {
  try {
    // Validate input data
    if (!data.name || !data.email || !data.company) {
      return {
        success: false,
        message: 'Missing required fields',
        error: 'Name, email, and company are required',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Invalid email format',
        error: 'Please provide a valid email address',
      };
    }

    // Send email to customer
    const customerEmailResult = await transporter.sendMail({
      from: emailConfig.from,
      to: data.email,
      replyTo: emailConfig.replyTo,
      subject: `Thank you for contacting ${emailConfig.companyName}`,
      html: customerEmailTemplate(data),
    });

    // Send email to sales team
    const salesEmailResult = await transporter.sendMail({
      from: emailConfig.from,
      to: emailConfig.salesTeamEmail,
      replyTo: data.email,
      subject: `New Lead - ${data.company} (${data.name})`,
      html: salesTeamEmailTemplate(data),
    });

    // Log success
    // console.log('✅ Emails sent successfully');
    // console.log('Customer email ID:', customerEmailResult.messageId);
    // console.log('Sales team email ID:', salesEmailResult.messageId);

    return {
      success: true,
      message: 'Your message has been sent successfully',
    };
  } catch (error) {
    // Log error details
    console.error('❌ Email sending failed:', error);

    // Return user-friendly error message
    return {
      success: false,
      message: 'Failed to process your request',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}