
import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  publicKey: 'whsCtgIw96tlwzheN', // Replace with your actual public key from EmailJS
  serviceId: 'service_m7zqhqg', // Replace with your service ID
  templateId: 'template_kc7xm8v', // Replace with your template ID
};

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'suryakenguva1@gmail.com',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};
