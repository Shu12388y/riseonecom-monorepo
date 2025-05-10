import React from "react";
import { cookies } from "next/headers";

export default async function ProfilePage() {
  const token = cookies().get("token")?.value;
  const response = await fetch(`${process.env.MAIN_DOMAIN}/api/auth/userinfo`, {
    method: "GET",
    headers: {
      Cookie: `${token}`,
    },
    cache: "no-store", // Ensures data is not cached in SSR
  });

  const { user } = await response.json();

  return (
    <div className="h-screen bg-gray-100 py-10 px-4 w-full">
      <h1 className="text-3xl font-semibold mb-10">Manage Profile</h1>
      <div className="mx-auto bg-white shadow-lg rounded-lg">
        <div className="flex items-center p-6 border-b">
          <div className="w-24 h-24 relative">
            <img
              className="rounded-full object-cover"
              src="https://avatar.iran.liara.run/public/44"
              alt="Profile Picture"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500">
              {user.plan.startsWith("advanced") ? (
                <span>Plan: {user.plan.slice(9)}</span>
              ) : (
                <span>Plan: {user.plan.slice(6)}</span>
              )}
            </p>
            <p className="mt-2 text-gray-700">
              Business: <strong>{user.businessName}</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-6 border-b bg-gray-50">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {user.Status}
            </h3>
            <p className="text-gray-500">Account Status</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {new Date(user.startingDate).toLocaleDateString()}
            </h3>
            <p className="text-gray-500">Start Date</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {new Date(user.expiryDate).toLocaleDateString()}
            </h3>
            <p className="text-gray-500">Expiry Date</p>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Contact Details
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <span className="text-gray-700">Email: {user.email}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700">
                Subscribed: {user.subscribed ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700">User ID: {user.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
