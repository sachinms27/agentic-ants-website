export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  agentCount?: string;
  useCase?: string;
}

export const customerEmailTemplate = (data: ContactFormData): string => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .content { padding: 20px 0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 13px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <p>Dear ${data.name},</p>

      <p>Thank you for contacting AgenticAnts. We have received your inquiry and appreciate your interest in our AgenticAnts platform.</p>

      <p>Our team will review your requirements and get back to you within 24 business hours to discuss how we can help transform your business with our AI solutions.</p>

      <p>If you have any immediate questions, please don't hesitate to reach out to us at contact@agenticants.com.</p>

      <p>We look forward to speaking with you soon.</p>

      <p>Best regards,</p>
      <p>The AgenticAnts Team</p>
    </div>
    <div class="footer">
      <p>AgenticAnts | AI Agent Platform</p>
      <p>This is an automated confirmation email sent to ${data.email}</p>
    </div>
  </div>
</body>
</html>
`;

export const salesTeamEmailTemplate = (data: ContactFormData): string => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .content { padding: 20px 0; }
    .details { margin: 20px 0; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <p><strong>New Contact Form Submission</strong></p>

      <div class="details">
        <div class="field">
          <span class="label">Name:</span> ${data.name}
        </div>
        <div class="field">
          <span class="label">Email:</span> ${data.email}
        </div>
        <div class="field">
          <span class="label">Company:</span> ${data.company}
        </div>
        ${data.agentCount ? `
        <div class="field">
          <span class="label">Expected Agent Count:</span> ${data.agentCount}
        </div>
        ` : ''}
        ${data.useCase ? `
        <div class="field">
          <span class="label">Use Case:</span> ${data.useCase}
        </div>
        ` : ''}
        <div class="field">
          <span class="label">Submitted:</span> ${new Date().toLocaleString()}
        </div>
      </div>

      <p><strong>Action Required:</strong></p>
      <p>Please follow up with this lead within 24 business hours.</p>

      <p>Best regards,<br>
      AgenticAnts System</p>
    </div>
  </div>
</body>
</html>
`;