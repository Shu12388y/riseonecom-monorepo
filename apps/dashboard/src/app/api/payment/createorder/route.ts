import { PaymentInstance } from "@/utils/payment";
import { NextResponse, NextRequest } from "next/server";
import { PaymentInfo } from "@/utils/paymentInfo";
import { prisma } from "@/utils/db";

export const POST = async (request: NextRequest) => {
  try {
    const paymentInfo = new PaymentInstance(
      process.env.KEYID!,
      process.env.KEYSECRET!
    ).getRazorpayInstance();

    const data = await request.json();

    if (!data || !data.plans || !data.price || !data.userid) {
      return NextResponse.json(
        { message: "Empty Body Request" },
        { status: 404 }
      );
    }

    const userPlanInfo = await prisma.user.findUnique({
      where: {
        name: data.name,
        email: data.email,
        businessName: data.businessName,
        id: data.userid as string,
      },
    });

    if (!userPlanInfo) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    if (userPlanInfo.subscribed) {
      return NextResponse.json(
        { message: "You have already have an active plan" },
        { status: 409 }
      );
    }

    // check user plan
    if (userPlanInfo.subscribed) {
      return NextResponse.json({ message: "Already have Active Plan" });
    }

    // check the price
    if (PaymentInfo[data.plans].price != data.price) {
      return NextResponse.json(
        { message: "Invalid payment Info" },
        { status: 403 }
      );
    }

    const options = {
      amount: PaymentInfo[data.plans].price * 100,
      currency: "INR",
      receipt: "rcp1",
    };

    const order = await paymentInfo.orders.create(options);

    return NextResponse.json(
      { message: "success", data: order },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
