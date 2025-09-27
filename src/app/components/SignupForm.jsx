"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function SignupForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, email, password, confirmPassword });
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-900 shadow-xl rounded-2xl w-full max-w-md border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>

      <label htmlFor="username" className="text-sm font-medium text-gray-300">
        Username
      </label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-600 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <label htmlFor="email" className="text-sm font-medium text-gray-300">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-600 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <label htmlFor="password" className="text-sm font-medium text-gray-300">
        Password
      </label>
      <div className="relative ">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" w-full border border-gray-600 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <label
        htmlFor="confirmPassword"
        className="text-sm font-medium text-gray-300"
      >
        Confirm Password
      </label>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className=" w-full border border-gray-600 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
      >
        Sign Up
      </button>
       <div className="flex flex-col justify-between items-center">
        <p className="text-sm text-gray-300">Already have an account?</p>
        <a href="/pages/login" className="text-blue-500 hover:underline">
            Login
        </a>
      </div>
    </form>
  );
}

export default SignupForm;
