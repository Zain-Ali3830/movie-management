"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiHome, FiInfo, FiMail, FiSettings, FiFilm } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/pages/about", label: "About", icon: FiInfo },
    { href: "/pages/contact", label: "Contact", icon: FiMail },
    { href: "/pages/login", label: "Admin", icon: FiSettings },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 shadow-lg" 
          : "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] rounded-lg group-hover:scale-105 transition-transform">
                <FiFilm className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
                Movie Management
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/30"
                        : "text-gray-300 hover:text-white hover:bg-[#172030]/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#172030]/50 transition-colors"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-[#232A40] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#172030]">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] rounded-lg">
                <FiFilm className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
                Movie Management
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#172030] transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[#00b4d8]/20 text-[#00b4d8] border border-[#00b4d8]/30"
                      : "text-gray-300 hover:text-white hover:bg-[#172030]/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}

export default Navbar;
