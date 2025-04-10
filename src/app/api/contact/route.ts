import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, practiceArea, caseDescription } = body;

    // Validate required fields
    if (!name || !email || !caseDescription) {
      return NextResponse.json(
        { error: "Name, email, and case description are required." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail as the email service
      auth: {
        user: process.env.USERNAME, // Your email
        pass: process.env.PASSWORD, // Replace with your email password
      },
    });

    // Email content
    const mailOptions = {
      from: "info@sayyidandshaykh.com", // Sender address
      to: "info@sayyidandshaykh.com", // Receiver address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Practice Area:</strong> ${practiceArea || "N/A"}</p>
        <p><strong>Case Description:</strong></p>
        <p>${caseDescription}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}