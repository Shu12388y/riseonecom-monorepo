'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "E-Commerce Platform Registration",
    description:
      "We take care of everything you need to get your business online. From registering on major platforms like Amazon, Flipkart, and Shopify to ensuring compliance and technical setup, we handle the entire process.",
    image: "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "📱"
  },
  {
    title: "Multi-Category Product Listings",
    description:
      "We optimize your product listings for multiple categories across e-commerce platforms, ensuring maximum visibility and discoverability.",
    image: "https://images.pexels.com/photos/6608888/pexels-photo-6608888.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: "📋"
  },
  {
    title: "Product Photography & Visual Design",
    description:
      "Capture customer attention with professional-grade visuals. We offer high-quality product photography, lifestyle shots, and custom graphics.",
    image: "https://images.pexels.com/photos/4464821/pexels-photo-4464821.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: "📸"
  },
  {
    title: "Ratings & Reviews Management",
    description:
      "Customer reviews can make or break your e-commerce success. We help you generate genuine reviews and manage your reputation.",
    image: "https://images.pexels.com/photos/4049942/pexels-photo-4049942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "⭐"
  },
  {
    title: "GST & Financial Management",
    description:
      "Navigating GST and financial compliance can be challenging. Our team manages GST filings, tax compliance, and accounting seamlessly.",
    image: "https://images.pexels.com/photos/14647295/pexels-photo-14647295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "💼"
  },
  {
    title: "Social Media & Storefront Management",
    description:
      "Grow your brand's online footprint with our social media and storefront management services.",
    image: "https://images.pexels.com/photos/6169025/pexels-photo-6169025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "🌐"
  },
  {
    title: "Custom E-Commerce Website Development",
    description:
      "We design and build custom e-commerce websites tailored to your business needs.",
    image: "https://images.pexels.com/photos/7289718/pexels-photo-7289718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "💻"
  },
];

const ServicePage = () => {
  return (
    <section className="py-16 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="relative inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
            Our Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
            We offer comprehensive solutions to elevate your e-commerce business.
            From platform registration to social media management, our expert team handles every aspect of your online presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 bg-opacity-90 text-white text-2xl z-10">
                {service.icon}
              </div>
              
              {/* Image with gradient overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50 group-hover:opacity-70 transition-opacity z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center p-8 bg-blue-600 rounded-2xl shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your E-Commerce Business?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts handle the technical complexities while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
              Contact Us
            </motion.button>
              </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicePage;