"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-white shadow-sm relative z-20">
        <nav className="flex items-center justify-between px-4 py-1 md:px-10 lg:px-20 w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
            <img className="h-44" src="https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckFxhHAvttscY68LaR7kelgdEV0ABUSmwyMGoI" alt="" />
            </Link>
            {/* <p className="text-2xl font-bold text-blue-800">RiseOn Ecom</p> */}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              <Link href="/service">Services</Link>
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              <Link href="/contact">Contact Us</Link>
            </li>
            <Link href="https://riseonecom-monorepo-f9n7.vercel.app/signup">
              <li className="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700 transition-colors duration-200">
                SignUp
              </li>
            </Link>
            <Link href="https://riseonecom-monorepo-f9n7.vercel.app/">
              <li className="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700 transition-colors duration-200">
                SignIn
              </li>
            </Link>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden cursor-pointer" onClick={toggleNav}>
            {nav ? (
              <AiOutlineClose size={24} className="text-blue-800" />
            ) : (
              <AiOutlineMenu size={24} className="text-blue-800" />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-3/4 sm:w-1/2 h-screen bg-blue-800 text-white flex flex-col items-start p-6 space-y-6 z-50 transition-transform duration-300`}
        >
          <ul className="text-xl w-full">
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              <Link href="/" onClick={toggleNav}>Home</Link>
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              <Link href="/about" onClick={toggleNav}>About Us</Link>
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              <Link href="/service" onClick={toggleNav}>Service</Link>
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              <Link href="/contact" onClick={toggleNav}>Contact</Link>
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              <Link href="https://riseonecom-monorepo-f9n7.vercel.app/signup" onClick={toggleNav}>SignUp</Link>
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              <Link href="https://riseonecom-monorepo-f9n7.vercel.app" onClick={toggleNav}>SignIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
