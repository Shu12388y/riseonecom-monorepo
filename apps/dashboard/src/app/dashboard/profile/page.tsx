import React from "react";
export default function ProfilePage() {
  return (
    <div className="h-screen  bg-gray-100 py-10 px-4 w-full">
      <h1 className="text-3xl font-semibold mb-10">Manage Profile</h1>
      <div className="mx-auto bg-white shadow-lg rounded-lg">
        <div className="flex items-center p-6 border-b">
          <div className="w-24 h-24 relative">
            <img
              className="rounded-full object-cover"
              src="https://images.pexels.com/photos/17594386/pexels-photo-17594386/free-photo-of-portrait-of-man-with-mustache-and-beard-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your profile image
              alt="Profile Picture"
              layout="fill"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-500">Admin | E-commerce Manager</p>
            <p className="mt-2 text-gray-700">
              Managing e-commerce operations with expertise in order tracking,
              inventory management, and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-6 border-b bg-gray-50">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">1,254</h3>
            <p className="text-gray-500">Orders</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">240</h3>
            <p className="text-gray-500">Products</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">$120,340</h3>
            <p className="text-gray-500">Total Sales</p>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Contact Details
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2m6 0h2m-6-6v6m6-6H4m6 0V4m6 4h-6"
                />
              </svg>
              <span className="text-gray-700">Email: john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h3m3 0h3m3 0h3m3 0h3m-3 0v3m0 3v3m0 3v3M4 4h16M4 16h16m-5 3v3m-6-3v3m2-15V4m6-2h4"
                />
              </svg>
              <span className="text-gray-700">Phone: +123 456 7890</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l4-4 4 4m0 0l-4-4-4 4m0-6h12"
                />
              </svg>
              <span className="text-gray-700">Location: New York, USA</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 text-right">
          <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
