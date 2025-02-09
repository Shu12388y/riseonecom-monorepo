"use client";

import { WarpBackground } from "@/components/ui/warp-background";
import { SignUpForm } from "@/components/ui/signupcard";

export default function Page() {
  return (
    <WarpBackground className="h-screen flex  items-center justify-center">
      <div className="flex  w-full max-w-4xl overflow-hidden rounded-lg border bg-white shadow-lg md:flex-row">
        {/* Left Side Content */}

        {/* Right Side - Authentication Forms */}
        <div className="flex flex-col w-1/2 items-center justify-center p-8">
          <div className="w-full">
            <SignUpForm />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 w-1/2 bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="mt-2 text-gray-600">
            Sign in to continue to your account and explore new opportunities.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>✅ Access your dashboard</li>
            <li>✅ Track your progress</li>
            <li>✅ Manage your settings</li>
          </ul>
        </div>
      </div>
    </WarpBackground>
  );
}
