"use client";

import { WarpBackground } from "@/components/ui/warp-background";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useState } from "react";

export default function Page() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <WarpBackground className="h-screen flex items-center justify-center">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg border bg-white shadow-lg md:flex-row">
        {/* Left Side Content */}
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

        {/* Right Side - Authentication Forms */}
        <div className="flex flex-col w-1/2 items-center justify-center p-8">
          {/* Toggle Buttons */}
          <div className="flex gap-4 pb-6">
            <button
              onClick={() => setIsSignUp(true)}
              className={`px-6 py-2 text-sm font-medium rounded-lg shadow-md transition-all ${
                isSignUp
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Create Account
            </button>
            <button
              onClick={() => setIsSignUp(false)}
              className={`px-6 py-2 text-sm font-medium rounded-lg shadow-md transition-all ${
                !isSignUp
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Already have an Account
            </button>
          </div>

          {/* Dynamic Authentication Component */}
          <div className="w-full">
            {isSignUp ? <SignUp /> : <SignIn forceRedirectUrl="/dashboard" />}
          </div>
        </div>
      </div>
    </WarpBackground>
  );
}
