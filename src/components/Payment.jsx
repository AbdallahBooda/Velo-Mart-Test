"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { CartStore } from "@/store/CartStore";

const Payment = () => {
  const cart = CartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
    // Here you can send to API or process payment
    alert("Payment submitted successfully!");
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-bold text-blue-800 sm:text-2xl">
            Payment
          </h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            {/* ✅ React Hook Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8"
            >
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Full name (as displayed on card){" "}
                    <span className="text-red-500 text-lg font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("full_name", {
                      required: "Full name is required",
                    })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    placeholder="Bonnie Green"
                  />
                  {errors.full_name && (
                    <p className="text-sm text-red-500">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>

                {/* Card Number */}
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Card number{" "}
                    <span className="text-red-500 text-lg font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("card_number", {
                      required: "Card number is required",
                      pattern: {
                        value: /^[0-9]{16}$/,
                        message: "Card number must be 16 digits",
                      },
                    })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    placeholder="1234123412341234"
                  />
                  {errors.card_number && (
                    <p className="text-sm text-red-500">
                      {errors.card_number.message}
                    </p>
                  )}
                </div>

                {/* Expiration */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Card expiration{" "}
                    <span className="text-red-500 text-lg font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("card_expiration", {
                      required: "Expiration date is required",
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                        message: "Format: MM/YY",
                      },
                    })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    placeholder="12/23"
                  />
                  {errors.card_expiration && (
                    <p className="text-sm text-red-500">
                      {errors.card_expiration.message}
                    </p>
                  )}
                </div>

                {/* CVV */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    CVV <span className="text-red-500 text-lg font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("cvv", {
                      required: "CVV is required",
                      pattern: {
                        value: /^[0-9]{3}$/,
                        message: "CVV must be 3 digits",
                      },
                    })}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    placeholder="123"
                  />
                  {errors.cvv && (
                    <p className="text-sm text-red-500">{errors.cvv.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-3xl border border-blue-500 text-blue-500 px-8 py-3 text-base font-medium hover:bg-blue-800 hover:text-white"
              >
                Pay now
              </button>
            </form>

            {/* Summary */}
            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${total}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      -$10.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Tax</dt>
                    <dd className="text-base font-medium text-gray-900">
                      $50
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    ${total + 50 - 10}
                  </dd>
                </dl>
              </div>

              <div className="mt-6 flex items-center justify-center gap-8">
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                  alt="PayPal"
                  width={80}
                  height={32}
                />
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                  alt="Visa"
                  width={80}
                  height={32}
                />
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                  alt="Mastercard"
                  width={80}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
