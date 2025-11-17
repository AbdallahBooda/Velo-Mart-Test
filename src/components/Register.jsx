"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    alert("Registration clicked — no backend connected.");
  };

  return (
    <div className="h-[calc(100vh-80px)] px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center ">Register</h1>

        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm font-medium ">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="john"
            {...register("username", { required: "Username is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label htmlFor="city" className="mb-1 text-sm font-medium ">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Riyadh"
            {...register("city", { required: "City is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm font-medium ">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+966 5xxxxxxx"
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[0-9+\s-]{8,15}$/, message: "Invalid phone number" },
            })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium ">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-medium ">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition"
        >
          Register
        </button>

        {/* Login Link */}
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-600">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
