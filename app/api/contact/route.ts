import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, service, message } =
      await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "outlook", // Using Microsoft/Outlook instead of Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your Microsoft email
        pass: process.env.EMAIL_PASS, // Your Microsoft email password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "connect@picoids.com", // Your business email
      subject: `New Contact Form Submission - ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${
              service
                ? `<p><strong>Service of Interest:</strong> ${service}</p>`
                : ""
            }
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
            <p><strong>Submission Details:</strong></p>
            <p>Date: ${new Date().toLocaleString()}</p>
            <p>IP: ${request.headers.get("x-forwarded-for") || "Unknown"}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Picoids - We'll get back to you soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Picoids Technology and Consulting. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Visit our <a href="https://picoids.com/services" style="color: #3b82f6;">services page</a> to learn more about what we offer</li>
            <li>Check out our <a href="https://picoids.com/case-studies" style="color: #3b82f6;">case studies</a> to see our work</li>
            <li>Call us directly at <strong>+91 8955225869</strong> for urgent matters</li>
          </ul>
          
          <p>Best regards,<br>
          <strong>The Picoids Team</strong></p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
            <p><strong>Picoids Technology and Consulting</strong><br>
            Hanuman street, Jailwell<br>
            Bikaner, Rajasthan, India - 334001<br>
            Phone: +91 8955225869<br>
            Email: connect@picoids.com</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
