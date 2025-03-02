'use client'
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "E-Commerce Platform Registration",
    description:
      "We take care of everything you need to get your business online. From registering on major platforms like Amazon, Flipkart, and Shopify to ensuring compliance and technical setup, we handle the entire process.",
    image: "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg",
  },
  {
    title: "Multi-Category Product Listings & Inventory Optimization",
    description:
      "We optimize your product listings for multiple categories across e-commerce platforms, ensuring maximum visibility and discoverability.",
    image: "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg",
  },
  {
    title: "Product Photography & Visual Design",
    description:
      "Capture customer attention with professional-grade visuals. We offer high-quality product photography, lifestyle shots, and custom graphics.",
    image: "https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg",
  },
  {
    title: "Ratings & Reviews Management",
    description:
      "Customer reviews can make or break your e-commerce success. We help you generate genuine reviews and manage your reputation.",
    image: "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg",
  },
  {
    title: "GST & Financial Management",
    description:
      "Navigating GST and financial compliance can be challenging. Our team manages GST filings, tax compliance, and accounting seamlessly.",
    image: "https://images.pexels.com/photos/7310206/pexels-photo-7310206.jpeg",
  },
  {
    title: "Social Media & Storefront Management",
    description:
      "Grow your brand’s online footprint with our social media and storefront management services.",
    image: "https://images.pexels.com/photos/6331257/pexels-photo-6331257.jpeg",
  },
  {
    title: "Custom E-Commerce Website Development",
    description:
      "We design and build custom e-commerce websites tailored to your business needs.",
    image: "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg",
  },
];

const ServicePage = () => {
  return (
    <section className="text-gray-900 body-font py-8 px-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container px-5 mx-auto flex flex-wrap"
      >
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-3xl lg:text-5xl font-bold title-font text-blue-600 mb-4 text-center">
            Our Service&apos;s
          </h1>
          <p className="leading-relaxed text-base mx-auto font-semibold text-center lg:text-xl">
            We offer a range of services to take your e-commerce business to the
            next level. <br />From platform registration to social media
            management, we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-6 p-6 rounded-lg shadow-lg bg-white transition-transform"
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicePage;
