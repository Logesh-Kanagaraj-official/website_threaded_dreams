/**
 * @file emailService.ts
 * @description EmailJS service for sending automatic and bulk emails
 * @module Services
 */

import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: "service_sb0y5v1", // Your EmailJS Service ID
  publicKey: "xERkS8qnnzyGtqsqu", // Your EmailJS Public Key
  templates: {
    newsletter: "template_pgvjny8", // Newsletter thank-you template
    invisibleChain: "template_1m9lij7", // Invisible Chain Necklaces
  },
};

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

/**
 * Send newsletter signup thank-you email
 */
export const sendNewsletterEmail = async (params: {
  to_email: string;
  to_name: string;
  product_interest: string;
  source: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.newsletter,
      {
        to_email: params.to_email,
        to_name: params.to_name || "there",
        product_interest: params.product_interest,
        source: params.source,
        reply_to: "santhiyalogesh02@gmail.com",
      }
    );

    console.log("Newsletter email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send newsletter email:", error);
    return { success: false, error };
  }
};

/**
 * Send Invisible Chain Necklaces signup email
 */
export const sendInvisibleChainEmail = async (params: {
  to_email: string;
  to_name: string;
  product_interest: string;
  source: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.invisibleChain,
      {
        to_email: params.to_email,
        to_name: params.to_name || "there",
        product_interest: params.product_interest,
        source: params.source,
        reply_to: "santhiyalogesh02@gmail.com",
      }
    );

    console.log("Invisible Chain email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Failed to send Invisible Chain email:", error);
    return { success: false, error };
  }
};

// Keep old function for backward compatibility
export const sendThankYouEmail = sendNewsletterEmail;

export default {
  initEmailJS,
  sendNewsletterEmail,
  sendInvisibleChainEmail,
  sendThankYouEmail, // For backward compatibility
};
