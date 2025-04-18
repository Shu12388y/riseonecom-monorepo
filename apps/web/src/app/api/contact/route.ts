// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/primsa";


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
    
    // Create record in database
    const newContact = await prisma.content.create({
      data: {
        firsname: first_name,
        lastname: last_name || "",
        email: email,
        Message: message,
      },
    });
    
    return NextResponse.json(
      { success: true, id: newContact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}