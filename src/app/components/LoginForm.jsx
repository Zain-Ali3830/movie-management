"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm({ onSubmit }) {
  const [formData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData },setLoginFormData );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-900 shadow-xl rounded-2xl w-full max-w-md border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-center text-white">Login</h2>

      <label htmlFor="email" className="text-sm font-medium text-gray-300">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setLoginFormData({ ...formData, email: e.target.value})}
        className="border border-gray-600 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <label htmlFor="password" className="text-sm font-medium text-gray-300">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => setLoginFormData({ ...formData, password: e.target.value})}
          className="border border-gray-600 bg-gray-800 text-white p-2 rounded-lg w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Login
      </button>
    </form>
  );
}
