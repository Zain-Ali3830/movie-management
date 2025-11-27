'use client';
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiFilm, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";

function Footer() {
  const [email, setEmail] = useState("");
  
  const handleNewsLetter = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Successfully subscribed to newsletter!");
    setEmail("");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] rounded-lg">
                  <FiFilm className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
                  Movie Management
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your ultimate destination for movie discovery, booking, and entertainment. Experience cinema like never before.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#00b4d8] transition-colors">
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00b4d8] transition-colors">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00b4d8] transition-colors">
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00b4d8] transition-colors">
                  <FiYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/pages/home" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pages/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pages/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/pages/admin" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Admin Panel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMail className="w-4 h-4 text-[#00b4d8]" />
                  <span className="text-gray-400 text-sm">support@moviemanagement.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-4 h-4 text-[#00b4d8]" />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-4 h-4 text-[#00b4d8]" />
                  <span className="text-gray-400 text-sm">123 Cinema Street, Movie City</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get the latest movie updates and exclusive offers.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00b4d8] transition-colors text-sm"
                />
                <button
                  onClick={handleNewsLetter}
                  className="w-full bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white py-2 px-4 rounded-lg font-medium hover:from-[#0096c7] hover:to-[#007ea7] transition-all duration-300 text-sm"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Movie Management. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
