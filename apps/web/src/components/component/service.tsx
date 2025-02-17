import React from "react";

const ServiceCard = ({ title, description, image1, image2 }:{title:string, description:string, image1:string, image2:string }) => {
  return (
    <div>
      <a href="#" className="group relative block rounded-3xl">
        <div className="relative h-[250px] ">
          <img
            src={image1}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-0 transition-opacity duration-500"
          />

          <img
            src={image2}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 transition-transform duration-500 group-hover:translate-y-[-10px]">
          <h3 className="text-xl font-bold text-black transition-colors duration-500 group-hover:text-gray-700">{title}</h3>
          <p className="mt-1.5 text-xs text-pretty font-medium text-black transition-opacity duration-500 group-hover:opacity-80">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
