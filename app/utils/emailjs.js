import emailjs from "@emailjs/browser";

class EmailService {
  constructor() {
    this.isInitialized = false;
    this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  }

  validateConfig() {
    // console.log("EmailJS Configuration Check:");
    // console.log("Public Key:", this.publicKey ? "✅ Set" : "❌ Missing");
    // console.log("Service ID:", this.serviceId ? "✅ Set" : "❌ Missing");
    // console.log("Template ID:", this.templateId ? "✅ Set" : "❌ Missing");

    const missingFields = [];
    if (!this.publicKey) missingFields.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    if (!this.serviceId || this.serviceId === "your_service_id")
      missingFields.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
    if (!this.templateId || this.templateId === "your_template_id")
      missingFields.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");

    if (missingFields.length > 0) {
      throw new Error(
        `EmailJS configuration is incomplete. Missing or invalid: ${missingFields.join(
          ", "
        )}`
      );
    }
  }

  init() {
    if (!this.isInitialized) {
      try {
        this.validateConfig();
        emailjs.init(this.publicKey);
        this.isInitialized = true;
        console.log("EmailJS initialized successfully");
      } catch (error) {
        console.error("EmailJS initialization failed:", error);
        throw error;
      }
    }
  }

  async sendEmail(templateParams) {
    try {
      console.log("Attempting to send email with params:", templateParams);
      this.init();

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        return { success: true, response };
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      console.error("Error type:", typeof error);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);

      // Provide user-friendly error messages
      let errorMessage = "Failed to send email. Please try again.";

      if (
        error.message.includes("configuration") ||
        error.message.includes("Missing")
      ) {
        errorMessage =
          "Email service is not properly configured. Please contact support.";
      } else if (
        error.message.includes("network") ||
        error.message.includes("fetch")
      ) {
        errorMessage =
          "Network error. Please check your connection and try again.";
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Too many requests. Please wait a moment and try again.";
      } else if (
        error.message.includes("Invalid") ||
        error.message.includes("not found")
      ) {
        errorMessage =
          "Email service configuration error. Please contact support.";
      } else if (error.text) {
        errorMessage = `Email service error: ${error.text}`;
      }

      return { success: false, error: errorMessage, details: error };
    }
  }
}

export const emailService = new EmailService();
