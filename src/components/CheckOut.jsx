"use client";

import { CartStore } from "@/store/CartStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const cart = CartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const router = useRouter();

  // ✅ useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ handle submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    router.push("/payment");
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-screen-xl px-4 2xl:px-0"
      >
        {/* Steps */}
        <ol className="items-center flex w-full max-w-2xl text-center text-sm font-semibold text-blue-800">
          <li className="flex items-center text-blue-700 md:w-full">Cart</li>
          <li className="flex items-center text-blue-700 md:w-full">Checkout</li>
          <li className="flex shrink-0 items-center">Order summary</li>
        </ol>

        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <h2 className="text-xl font-semibold text-blue-800">
              Delivery Details
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  Your email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                  placeholder="name@flowbite.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  Country
                </label>
                <select
                  {...register("country", { required: "Country is required" })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                >
                  <option value="">Select country</option>
                  <option value="US">United States</option>
                  <option value="AS">Australia</option>
                  <option value="FR">France</option>
                  <option value="ES">Spain</option>
                  <option value="UK">United Kingdom</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  City
                </label>
                <select
                  {...register("city", { required: "City is required" })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                >
                  <option value="">Select city</option>
                  <option value="SF">San Francisco</option>
                  <option value="NY">New York</option>
                  <option value="LA">Los Angeles</option>
                  <option value="CH">Chicago</option>
                  <option value="HU">Houston</option>
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      // value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                      message: "Format: 123-456-7890",
                    },
                  })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                  placeholder="123-456-7890"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", { required: "Address is required" })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                  placeholder="123 Main St"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Post number */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-800">
                  Post number
                </label>
                <input
                  type="text"
                  {...register("post_number", {
                    required: "Post number is required",
                  })}
                  className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5"
                  placeholder="DE42313253"
                />
                {errors.post_number && (
                  <p className="text-red-500 text-sm">
                    {errors.post_number.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200">
                <dl className="flex items-center justify-between py-3">
                  <dt className="text-base font-semibold text-blue-800">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${total}
                  </dd>
                </dl>
                <dl className="flex items-center justify-between py-3">
                  <dt className="text-base font-semibold text-blue-800">Tax</dt>
                  <dd className="text-base font-medium text-gray-900">$199</dd>
                </dl>
                <dl className="flex items-center justify-between py-3">
                  <dt className="text-base font-bold text-blue-800">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    ${total + 199}
                  </dd>
                </dl>
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-3xl ring-1 text-blue-500 px-8 py-3 text-base font-medium hover:text-white hover:bg-blue-800"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckOut;
