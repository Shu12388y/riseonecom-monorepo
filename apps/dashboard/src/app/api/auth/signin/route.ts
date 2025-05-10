import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers'

// Ensure this API runs in the Node.js runtime (not Edge)
export const runtime = "nodejs";

export const POST = async (request: Request) => {
  try {
    const { data } = await request.json();
    if (!data || !data.email || !data.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!user.subscribed) {
      return NextResponse.json({message:"No active plan",data:user.id},{status:403});
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    await cookies().set({
      name:"token",
      value:token,
      httpOnly:true,
      path:'/'
    });

    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error during signin:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
