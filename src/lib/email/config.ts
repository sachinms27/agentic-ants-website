import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

if (!process.env.SMTP_HOST) {
  throw new Error('SMTP_HOST is not defined in environment variables');
}

if (!process.env.SMTP_USER) {
  throw new Error('SMTP_USER is not defined in environment variables');
}

if (!process.env.SMTP_PASS) {
  throw new Error('SMTP_PASS is not defined in environment variables');
}

const transporterConfig: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export const transporter = nodemailer.createTransport(transporterConfig);

export const emailConfig = {
  from: process.env.EMAIL_FROM || '"Agentic Ants" <noreply@agenticants.com>',
  replyTo: process.env.EMAIL_REPLY_TO || 'contact@agenticants.com',
  salesTeamEmail: process.env.SALES_TEAM_EMAIL || 'sales@agenticants.com',
  companyName: process.env.COMPANY_NAME || 'Agentic Ants',
};

export async function verifyEmailConfiguration(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error);
    return false;
  }
}