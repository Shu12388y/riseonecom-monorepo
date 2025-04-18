"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Page() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ""
  });

  interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    message: string;
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.first_name || !formData.email || !formData.message) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Please fill in all required fields"
      });
      return;
    }
    
    setStatus({ ...status, isSubmitting: true });
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit");
      }
      
      // Success
      setStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: "Thank you! Your message has been received."
      });
      
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Something went wrong. Please try again."
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="lg:px-[10rem] lg:py-[3rem]"
    >
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Contact image"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Get in touch with RiseOnEcom
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Got questions? Need expert eCommerce solutions? We&apos;re here
                to help!
              </p>

              {status.isSuccess && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                  {status.message}
                </div>
              )}
              
              {status.isError && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                  {status.message}
                </div>
              )}

              <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-2"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-2"
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-2"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    cols={20}
                    rows={4}
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-2"
                    required
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={status.isSubmitting}
                    className="inline-flex items-center justify-center gap-2 shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden disabled:opacity-70"
                  >
                    {status.isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              <p className="mt-4 leading-relaxed text-gray-500">
                Let&apos;s take your online business to the next level!
              </p>
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  );
}

export default Page;