import React from "react";

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
    <section className="text-gray-900 body-font py-12 px-5">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-center">
            Rise on Ecom Services
          </h1>
          <p className="leading-relaxed text-base mx-auto">
            We offer a range of services to take your e-commerce business to the
            next level. From platform registration to social media management,
            we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col  items-center gap-6 p-6 rounded-lg shadow-lg bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
