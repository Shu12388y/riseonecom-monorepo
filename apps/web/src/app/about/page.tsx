import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function AboutUs() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-6 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center w-full">
          <BackgroundBeamsWithCollision className="w-full">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white font-sans tracking-tight">
                About Us
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                At Rise on Ecom, we make it effortless for businesses to
                transition and thrive in the online marketplace. With our
                seamless, all-in-one solutions, we empower sellers of all sizes
                to establish, manage, and grow their online presence without the
                hassle.
                <br />
                <p>
                  From platform registration and product listings to inventory
                  optimization and reviews management, we handle the
                  complexities that often slow down growth. Our expert team
                  ensures that every step of your digital journey is smooth,
                  efficient, and tailored to your unique needs.
                </p>
              </p>
            </div>
          </BackgroundBeamsWithCollision>
        </div>

        {/* Mission Section */}
        <div className="text-center max-w-3xl">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Our Mission
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Our mission is simple: to break down barriers, simplify e-commerce,
            and help businesses unlock their full potential online. Whether
            you&apos;re just starting out or looking to scale, we&apos;re here
            to guide and support you every step of the way.
          </p>
        </div>

        {/* Team Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {["Alice Johnson", "Bob Smith", "Charlie Brown"].map(
              (name, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center"
                >
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Software Engineer
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center max-w-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Get in Touch
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            We’d love to hear from you! Whether you have a question or just want
            to say hi, feel free to reach out.
          </p>
          <a
            href="mailto:contact@yourcompany.com"
            className="mt-4 inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
