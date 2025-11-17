"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Login clicked — no backend connected.");
  };

  return (
    <div className="h-[calc(100vh-80px)] px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center ">Login</h1>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium "
          >
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
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium "
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Forgot Password Link */}
        <Link
          href="/reset-password"
          className="text-sm underline text-blue-600"
        >
          Forgot Password?
        </Link>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="underline text-blue-600">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
