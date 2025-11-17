"use client";

import { CartStore } from "@/store/CartStore";
import Link from "next/link";

const ProductDetails = ({ product }) => {
  const addToCart = CartStore((state) => state.addToCart);

  const onSubmit = (e) => {
    e.preventDefault(); // stop page reload
  };
  return (
    <div className="">
      <div className="pt-24">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight  sm:text-3xl">
              {product.title}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight ">
              ${product.price}
            </p>

            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <Link
                  href="#"
                  className="ml-3 text-sm font-medium  hover:text-blue-500"
                >
                  117 reviews
                </Link>
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-10">
              <div>
                <h3 className="text-sm font-medium ">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <div className="flex items-center space-x-3">
                    <label
                      aria-label="White"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-1 ring-gray-400 focus:outline-none"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="White"
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 "
                      ></span>
                    </label>
                    <label
                      aria-label="Gray"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-1 ring-gray-400 focus:outline-none"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Gray"
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"
                      ></span>
                    </label>
                    <label
                      aria-label="Black"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-1 ring-gray-900 focus:outline-none"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Black"
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium ">Size</h3>
                  <Link
                    href=""
                    className="text-sm font-medium  hover:text-blue-500"
                  >
                    Size guide
                  </Link>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase   focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XXS"
                        disabled
                        className="sr-only"
                      />
                      <span>XXS</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border  px-4 py-3 text-sm font-medium uppercase  shadow-sm  focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XS"
                        className="sr-only"
                      />
                      <span>XS</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border  px-4 py-3 text-sm font-medium uppercase  shadow-sm  focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="S"
                        className="sr-only"
                      />
                      <span>S</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border  px-4 py-3 text-sm font-medium uppercase  shadow-sm  focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="M"
                        className="sr-only"
                      />
                      <span>M</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border  px-4 py-3 text-sm font-medium uppercase  shadow-sm  focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="L"
                        className="sr-only"
                      />
                      <span>L</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase  shadow-sm  focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XL"
                        className="sr-only"
                      />
                      <span>XL</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border  px-4 py-3 text-sm font-medium uppercase  shadow-sm  focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="2XL"
                        className="sr-only"
                      />
                      <span>2XL</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase  shadow-sm focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        type="radio"
                        name="size-choice"
                        value="3XL"
                        className="sr-only"
                      />
                      <span>3XL</span>

                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-10 flex w-full items-center ring-1 justify-center rounded-3xl  text-blue-500 px-8 py-3 text-base font-medium  hover:text-white  hover:bg-blue-800 focus:outline-none focus:ring-blue-500"
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base ">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium ">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="">
                    <span className="">
                      Hand cut and sewn locally
                    </span>
                  </li>
                  <li className="">
                    <span className="">
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className="">
                    <span className="">
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className="">
                    <span className="">
                      Ultra-soft 100% cotton
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium ">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm ">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming
                  &quot;Charcoal Gray&quot; limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
