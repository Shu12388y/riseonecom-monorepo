import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PaymentInfo } from "@/utils/paymentInfo";
import { prisma } from "@/utils/db";
import { handleDate } from "@/utils/handleDate";

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.KEYSECRET!;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const {
    userid,
    paymentInfo,
    orderCreationId,
    razorpayPaymentId,
    razorpaySignature,
  } = await request.json();

  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  }

  const subscriptionInfo = PaymentInfo[paymentInfo];

  await prisma.user.update({
    data: {
      startingDate: new Date(),
      expiryDate: handleDate(subscriptionInfo.validity),
      subscribed: true,
      Status: "active",
      plan: subscriptionInfo.type,
    },
    where: {
      id: userid,
    },
  });

  await prisma.paymentInfo.update({
    data: {
      status: "Success",
    },
    where: {
      orderCreationId: orderCreationId,
    },
  });

  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 }
  );
}
