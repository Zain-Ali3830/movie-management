"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white mt-2">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between md:justify-between">
          
          {/* Left Side (Desktop) / Center (Mobile) */}
          <h1 className="text-xl font-bold text-blue-500 tracking-wide text-center ">
            Movie Management
          </h1>

          {/* Right Side Links (Hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/pages/home" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button (Visible only on small screens) */}
          <button
            className=" md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-start mt-16 space-y-6 px-6">
          <Link
            href="/pages/home"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
