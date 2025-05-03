// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract form data
    const { first_name, last_name, email, message } = body;

    // Validate required fields
    if (!first_name || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: email,
      to: "contact@riseonecom.in",
      subject: "Enquiry"+ "-" + first_name + last_name,
      text: message,
    };

    transporter.sendMail(mailOptions,()=>{
      console.log("sended")
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  } 
}
