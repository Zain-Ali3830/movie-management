'use client';
import { useState } from "react";
import {Toaster,toast} from "react-hot-toast";
function Footer() {
  const [email, setEmail] = useState("");
  function handleNewsLetter() {
    if (!email || !email.includes("@gmail.com")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed to newsletter!");
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/pages/home" className="hover:text-blue-400">Home</a></li>
              <li><a href="/pages/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/pages/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
            <p className="text-sm mb-3">Subscribe for updates & new releases</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md bg-slate-700 text-white focus:outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleNewsLetter} className="text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8] bg-[#1c2541] px-4 rounded-r-md cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © 2025 Movie Management. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
