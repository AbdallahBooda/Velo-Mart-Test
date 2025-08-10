"use client";

import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent!");
    reset();
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-800">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-blue-800 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              className="shadow-sm  border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-blue-500 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              {...register("message", { required: "Message is required" })}
              className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-blue-500 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium ring-1 text-center text-blue-500 ring-blue-500 rounded-3xl  sm:w-fit hover:bg-blue-800 hover:text-white"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
