"use client";

import { WarpBackground } from "@/components/ui/warp-background";
import { LoginForm } from "@/components/ui/logincard";

export default function Page() {
  return (
    <WarpBackground className="h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-4xl flex-col md:flex-row overflow-hidden rounded-lg border bg-white shadow-lg">
        {/* Left Side Content (Hidden on Mobile) */}
        <div className="lg:flex hidden flex-col justify-center p-8 w-1/2 bg-gray-100">
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
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 w-full md:w-1/2">
          <div className="w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </WarpBackground>
  );
}
