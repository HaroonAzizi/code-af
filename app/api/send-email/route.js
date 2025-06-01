import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, project, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Here you would normally integrate with your email service
    // For security, the actual EmailJS integration with private key should be here
    // But since EmailJS is primarily a client-side service, we'll simulate the API

    // In a production environment, you might want to:
    // 1. Use a server-side email service like SendGrid, Amazon SES, etc.
    // 2. Store email data in a database
    // 3. Implement rate limiting
    // 4. Add additional validation and sanitization

    // For now, we'll create a structured response
    const emailData = {
      from_name: name,
      from_email: email,
      project_type: project || "Not specified",
      budget_range: budget || "Not specified",
      message: message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    };

    // Log the email data (in production, you'd save to database)
    console.log("New contact form submission:", emailData);

    // Simulate email sending success
    // In a real implementation, you'd call your email service here

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
