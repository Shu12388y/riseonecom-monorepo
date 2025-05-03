"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail, Globe } from "lucide-react";
import axios from "axios";
import { useSession } from "../hooks/useSession";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PricingCards() {
  const router = useRouter();

  const { userid } = useSession();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const handlePayment = async (paymentinfo: string, price: number) => {
    if (!userid) {
      alert("First SignUp");
      router.push("/getstarted");
    }
    try {
      const orderId = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/payment/createorder`,
        {
          plans: paymentinfo,
          price: price,
          userid: userid,
        }
      );
      const options = {
        key: `${process.env.NEXT_PUBLIC_KEY}`,
        amount: parseFloat(price.toString()) * 100,
        currency: "INR",
        order_id: orderId?.data?.data?.id,
        handler: async function (response: any) {
          const data = {
            userid: userid,
            paymentInfo: paymentinfo,
            orderCreationId: orderId?.data?.data?.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          setModal(true);
          setLoading(true);
          await axios.post(
            `${process.env.NEXT_PUBLIC_DOMAIN}/api/payment/handleorder`,
            {
              userid: userid,
              orderCreationId: orderId?.data?.data?.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            }
          );

          const result = await fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN}/api/payment/verifypayment`,
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            }
          );

          const res = await result.json();
          if (res.isOk) {
            setModal(false);
            setLoading(false);
            alert("payment succeed");
            window.location.replace(`${process.env.NEXT_PUBLIC_DOMAIN}`);
          } else {
            setModal(false);
            setLoading(false);
            alert(res.message);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error: any) {
      if (error.status == 409) {
        alert("You already have an active plan ");
      }
    }
  };

  return (
    <div className="relative min-h-screen p-6 md:p-10">
      {modal && (
        <div
          className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mt-4">
              <p className="text-pretty text-gray-700">
                {loading && (
                  <div
                    className="
        font-bold 
        text-[30px] 
        pb-2 
        w-fit 
        animate-underline 
        bg-[linear-gradient(currentColor_0_0)] 
        bg-[0_100%] 
        bg-no-repeat 
        bg-[length:0%_3px] 
        before:content-['Loading...']
      "
                  ></div>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Header with Logo */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 tracking-tight">
          EMPOWERING SELLERS TO SUCCEED ONLINE!
        </h1>
        <p className="text-xl font-medium mb-6 text-blue-700">
          Affordable Packages Tailored for Your Business Needs
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Basic Packages */}
        <div className="mb-16">
          <div className="flex items-center mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mr-4">
              BASIC PACKAGES
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-blue-200 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Package 1 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group flex flex-col justify-between">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 pt-8 pb-10 relative">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                  Basic Starter
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  For New Sellers
                </CardDescription>
                <div className="absolute -bottom-5 left-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold px-6 py-2 rounded-xl shadow-lg">
                    ₹4,999
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    MOST POPULAR
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-10 pb-6 px-6">
                <p className="text-gray-500 mb-6 text-sm">
                  3 month subscription
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Registration + Product listing
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">30 Products Listing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">3 Months Service</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  onClick={() => handlePayment("BSC17145589561233821", 4999)}
                  className="w-full bg-blue-600 hover:bg-indigo-700  text-white py-6 rounded-xl shadow-md hover:shadow-xl transition-all font-semibold text-lg"
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Basic Package 2 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 pt-8 pb-10 relative">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                  Premium Basic
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Complete Business Solution
                </CardDescription>
                <div className="absolute -bottom-5 left-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold px-6 py-2 rounded-xl shadow-lg">
                    ₹14,999
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-green-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    BEST VALUE
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-10 pb-6 px-6">
                <p className="text-gray-500 mb-6 text-sm">
                  3 month subscription
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Registration + Product listing (30 Products)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Professional Product Photoshoot
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Designing + Product Description
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">Review Management</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <p className="text-gray-700">3 Months Service</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  onClick={() => handlePayment("PRM17145589571249407", 14999)}
                  className="w-full bg-blue-600 hover:bg-indigo-700  text-white py-6 rounded-xl shadow-md hover:shadow-xl transition-all font-semibold text-lg"
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Advanced Packages */}
        <div className="mb-16">
          <div className="flex items-center mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mr-4">
              ADVANCED PACKAGES
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-blue-200 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advanced Package 1 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group flex flex-col justify-between">
              <CardHeader className="bg-gradient-to-r from-indigo-700 to-indigo-500 pt-8 pb-10 relative">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                  Advanced Starter
                </CardTitle>
                <CardDescription className="text-indigo-100 text-lg">
                  Expanded Product Range
                </CardDescription>
                <div className="absolute -bottom-5 left-6">
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-400 text-white text-xl font-bold px-6 py-2 rounded-xl shadow-lg">
                    ₹9,999
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-10 pb-6 px-6">
                <p className="text-gray-500 mb-6 text-sm">
                  3 month subscription
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Registration + Product listing
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">70 Products Listing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">3 Months Service</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  onClick={() => handlePayment("BSC17145589581251278", 9999)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-xl shadow-md hover:shadow-xl transition-all font-semibold text-lg"
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Advanced Package 2 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group">
              <CardHeader className="bg-gradient-to-r from-indigo-700 to-indigo-500 pt-8 pb-10 relative">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                  Advanced Premium
                </CardTitle>
                <CardDescription className="text-indigo-100 text-lg">
                  Complete Yearly Solution
                </CardDescription>
                <div className="absolute -bottom-5 left-6">
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-400 hover:bg-indigo-700 text-white text-xl font-bold px-6 py-2 rounded-xl shadow-lg">
                    ₹29,999
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-green-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    BEST VALUE
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-10 pb-6 px-6">
                <p className="text-gray-500 mb-6 text-sm">
                  12 month subscription
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Registration + Product listing (70 Products)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Professional Product Photoshoot
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">
                      Designing + Product Description
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">Review Management</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Check className="text-indigo-600" size={14} />
                    </div>
                    <p className="text-gray-700">12 Months Service</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  onClick={() => handlePayment("PRM17145589591265632", 29999)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700  text-white py-6 rounded-xl shadow-md hover:shadow-xl transition-all font-semibold text-lg"
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Add-on Services */}
        <div className="mb-16">
          <div className="flex items-center mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mr-4">
              OPTIONAL ADD-ON SERVICES
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-blue-200 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 max-w-xl mx-auto">
            {/* Add-on Package */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group">
              <CardHeader className="bg-gradient-to-r from-cyan-700 to-cyan-500 pt-8 pb-10 relative">
                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                  GST Services
                </CardTitle>
                <CardDescription className="text-cyan-100 text-lg">
                  Complete GST Compliance
                </CardDescription>
                <div className="absolute -bottom-5 left-6">
                  <div className="bg-gradient-to-br from-cyan-600 to-cyan-400 text-white text-xl font-bold px-6 py-2 rounded-xl shadow-lg">
                    ₹10,000
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-10 pb-6 px-6">
                <p className="text-gray-500 mb-6 text-sm">12 month service</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Check className="text-cyan-600" size={14} />
                    </div>
                    <p className="text-gray-700">GST Registration</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Check className="text-cyan-600" size={14} />
                    </div>
                    <p className="text-gray-700">12 Months GST Filing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Check className="text-cyan-600" size={14} />
                    </div>
                    <p className="text-gray-700">Professional Tax Support</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 rounded-xl shadow-md hover:shadow-xl transition-all font-semibold text-lg">
                  Contact Us
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-600 rounded-full opacity-10"></div>

          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            Let&apos;s take your business to the next level!
          </h3>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl">
              <Mail size={20} className="text-blue-600" />
              <p className="text-gray-700">contact@riseonecom.in</p>
            </div>

            <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl">
              <Globe size={20} className="text-blue-600" />
              <p className="text-gray-700">www.riseonecom.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
