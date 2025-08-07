"use client";

import { useState } from "react";
import Link from "next/link";
const Register = () => {
    const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("Registration clicked — no backend connected.");
  };
  return (
    <div className="h-[calc(100vh-80px)] px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
    <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center text-blue-800">Register</h1>

      <div className="flex flex-col">
        <label htmlFor="username" className="mb-1 text-sm font-medium text-gray-700">Username</label>
        <input
          id="username"
          type="text"
          placeholder="john"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="city" className="mb-1 text-sm font-medium text-gray-700">City</label>
        <input
          id="city"
          type="text"
          placeholder="e.g. Riyadh"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="+966 5xxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          placeholder="john@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button type="submit" className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition">
        Register
      </button>

      {message && <div className="text-green-600 text-sm text-center">{message}</div>}

      <div className="text-sm text-center">
        Already have an account?{" "}
        <Link href="/login" className="underline text-blue-600">Login</Link>
      </div>
    </form>
  </div>
  )
}

export default Register