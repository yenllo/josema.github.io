import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to: string, subject: string, react: React.ReactElement) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This will be replaced with a custom domain
      to,
      subject,
      react,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};
