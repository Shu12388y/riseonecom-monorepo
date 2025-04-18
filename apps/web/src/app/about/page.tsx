"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800); // Simulating a loading delay
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-3xl font-bold text-blue-600"
          >
            Loading...
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto flex flex-col justify-center items-center px-6 py-16 space-y-12"
        >
          {/* Hero Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center w-full relative"
          >
            <BackgroundBeamsWithCollision className="w-full relative bg-white">
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckFxhHAvttscY68LaR7kelgdEV0ABUSmwyMGoI" 
                  alt="background" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-6xl font-bold text-black dark:text-white font-sans tracking-tight">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">
                  At Rise on Ecom, we make it effortless for businesses to
                  transition and thrive in the online marketplace.
                  <br />
                  From platform registration and product listings to inventory
                  optimization and reviews management, we handle the
                  complexities that often slow down growth.
                </p>
              </div>
            </BackgroundBeamsWithCollision>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl"
          >
            <h3 className="text-6xl font-semibold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Our mission is simple: to break down barriers, simplify
              e-commerce, and help businesses unlock their full potential
              online.
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
              Meet the Founders
            </h3>
            <div className="grid grid-cols-2 gap-8 mt-6 items-center justify-center">
              {[
                { name: "Mr. Anurag Sharma", imgSrc: "/image1.jpeg" },
                { name: "Mr. Ritesh Kumar", imgSrc: "/image2.jpeg" },
              ].map((person, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center"
                >
                  <img 
                    className="w-24 h-24 mx-auto rounded-full mb-4" 
                    src={person.imgSrc} 
                    alt={`${person.name}'s photo`} 
                  />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {person.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              We&apos;d love to hear from you! Whether you have a question or just
              want to say hi, feel free to reach out.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:opacity-90"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}