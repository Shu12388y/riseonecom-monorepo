import React from "react";

const ServiceCard = ({ 
  title, 
  description, 
  image1, 
  image2 
}: {
  title: string, 
  description: string, 
  image1: string, 
  image2: string 
}) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Container with hover effect */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image1}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: 1 }}
        />
        
        <img
          src={image2}
          alt={`${title} alternate`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
        />
      </div>
      
      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;