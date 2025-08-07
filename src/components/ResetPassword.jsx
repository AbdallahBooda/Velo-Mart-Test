"use client";

import { useState } from "react";
import Link from "next/link";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset flow
    console.log("Reset email:", email);
    setMessage(
      "If this email is registered, you will receive reset instructions."
    );
  };

  return (
    <div className="h-[calc(100vh-80px)] px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center text-blue-800">
          Reset Password
        </h1>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="ring-2 ring-gray-300 rounded-md p-3 w-80"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-blue-800 text-white p-2 rounded-md">
          Send Reset Link
        </button>

        <div className="text-sm text-center">
          Remember your password?{" "}
          <Link href="/login" className="underline text-blue-600">
            Login
          </Link>
        </div>

        {message && (
          <p className="text-green-600 text-sm text-center">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
