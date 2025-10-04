// app/pages/contact/page.jsx
"use client";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b132b] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
          Get in Touch
        </h1>
        <p className="text-gray-300">
          We’d love to hear from you! Reach out for collaborations or queries.
        </p>
      </div>

      {/* Contact Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="bg-[#1c2541] rounded-2xl p-8 shadow-xl border border-[#00b4d8]/40">
          <h2 className="text-2xl font-semibold mb-6 text-[#00b4d8]">
            Contact Information
          </h2>
          <div className="space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#00b4d8] text-xl" />
              <span>support@movieverse.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#00b4d8] text-xl" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#00b4d8] text-xl" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-[#1c2541] rounded-2xl p-8 shadow-xl border border-[#00b4d8]/40">
          <h2 className="text-2xl font-semibold mb-6 text-[#00b4d8]">
            Send a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-gray-400">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[#0b132b] border border-[#00b4d8]/30 focus:outline-none focus:border-[#00b4d8] text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[#0b132b] border border-[#00b4d8]/30 focus:outline-none focus:border-[#00b4d8] text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-[#0b132b] border border-[#00b4d8]/30 focus:outline-none focus:border-[#00b4d8] text-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00b4d8] text-black font-semibold py-3 rounded-lg hover:bg-[#0096c7] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
