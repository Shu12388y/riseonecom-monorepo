'use client';

import React from "react";

import Link from "next/link";

const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const toggleNav = () => {
//     setNav(!nav);
//   };

  return (
    <>
      
      {/* Main Navbar */}
      <div className="bg-white shadow-sm relative z-20">
        <nav className="flex items-center justify-between px-4 py-4 md:px-10 lg:px-20 w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <p className="text-2xl font-bold text-blue-800">RiseOn Ecom</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Home
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              About Us
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Service
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Blog
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Contact
            </li>
            <Link prefetch href="/signup">
              <li className="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700 transition-colors duration-200">
                SignUp
              </li>
            </Link>
            <Link prefetch href="/login">
              <li className="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700 transition-colors duration-200">
                SignIn
              </li>
            </Link>
          </ul>

          {/* Mobile Menu Toggle */}
          {/* <div className="md:hidden cursor-pointer" onClick={toggleNav}>
            {nav ? (
              <AiOutlineClose size={24} className="text-blue-800" />
            ) : (
              <AiOutlineMenu size={24} className="text-blue-800" />
            )}
          </div> */}
        </nav>

        {/* Mobile Menu */}
        {/* <div
          className={`${
            nav ? "block" : "hidden"
          } bg-blue-800 text-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 z-50 transition-transform duration-300`}
        >
          <ul className="text-2xl text-center">
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Home
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              About Us
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Service
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Blog
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Contact
            </li>
            <Link prefetch href="/signup">
              <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                SignUp
              </li>
            </Link>
            <Link prefetch href="/login">
              <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                SignIn
              </li>
            </Link>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;