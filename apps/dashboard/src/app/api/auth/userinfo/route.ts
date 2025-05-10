import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export const GET = async (req: NextRequest) => {
  try {
    // ✅ Extract and parse cookies from headers
    const cookieHeader = await req.headers.get("Cookie");
    const token = await cookieHeader;

    if (!token) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }

    // ✅ Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        userId: string;
        email: string;
      };
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // ✅ Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        subscribed: true,
        businessName: true,
        plan: true,
        Status: true,
        additionPlans: true,
        startingDate: true,
        expiryDate: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user info:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
