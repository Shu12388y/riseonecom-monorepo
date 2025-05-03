import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/db";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    if (!data) {
      return NextResponse.json(
        { message: "Empty request body" },
        { status: 404 }
      );
    }
    await prisma.paymentInfo.create({
      data: {
        userid: data.userid,
        orderCreationId: data.orderCreationId,
        razorpayOrderId: data.razorpayOrderId,
        razorpayPaymentId: data.razorpayPaymentId,
        razorpaySignature: data.razorpaySignature,
      },
    });

    return NextResponse.json({ message: "CREATED" }, { status: 201 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    return NextResponse.json({ message: error }, { status: error.status });
  }
};
