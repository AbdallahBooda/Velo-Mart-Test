"use client";

import { CartStore } from "@/store/CartStore";

const CheckOut = () => {
  const cart = CartStore((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol className="items-center flex w-full max-w-2xl text-center text-sm font-semibold text-blue-800">
            <li className="after:border-1 flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 text-blue-500  sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after: after:content-['/'] after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li className="after:border-1 flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 text-blue-500  sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after: after:content-['/'] after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li className="flex shrink-0 items-center">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-800">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-semibold text-blue-800"
                    >
                      {" "}
                      Your name{" "}
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-semibold text-blue-800"
                    >
                      {" "}
                      Your email*{" "}
                    </label>
                    <input
                      type="email"
                      id="your_email"
                      className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select-country-input-3"
                        className="block text-sm font-semibold text-blue-800"
                      >
                        {" "}
                        Country*{" "}
                      </label>
                    </div>
                    <select
                      id="select-country-input-3"
                      defaultValue="SF"
                      className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option selected>United States</option>
                      <option value="AS">Australia</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select-city-input-3"
                        className="block text-sm font-semibold text-blue-800"
                      >
                        {" "}
                        City*{" "}
                      </label>
                    </div>
                    <select
                      id="select-city-input-3"
                      defaultValue="SF"
                      className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option selected>San Francisco</option>
                      <option value="NY">New York</option>
                      <option value="LA">Los Angeles</option>
                      <option value="CH">Chicago</option>
                      <option value="HU">Houston</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="phone-input-3"
                      className="mb-2 block text-sm font-semibold text-blue-800"
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <div className="flex items-center">
                      <button
                        id="dropdown-phone-button-3"
                        data-dropdown-toggle="dropdown-phone-3"
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-blue-500 bg-blue-50 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-100  "
                        type="button"
                      >
                        <svg
                          fill="none"
                          aria-hidden="true"
                          className="me-2 h-4 w-4 "
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#D02F44"
                              fillRule="evenodd"
                              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                              clipRule="evenodd"
                            />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fillRule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clipRule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_343_121520"
                              x1=".933"
                              x2=".933"
                              y1="1.433"
                              y2="6.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset="1" stopColor="#F0F0F0" />
                            </linearGradient>
                            <filter
                              id="filter0_d_343_121520"
                              width="6.533"
                              height="5.667"
                              x=".933"
                              y="1.433"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_343_121520"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_343_121520"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        +1
                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 9-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdown-phone-3"
                        className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow "
                      ></div>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  border-s-gray-700 "
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-blue-800"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-blue-300 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Address"
                      className="mb-2 block text-sm font-semibold text-blue-800"
                    >
                      {" "}
                      Address{" "}
                    </label>
                    <input
                      type="text"
                      id="Address"
                      className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Flowbite LLC"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="post_number"
                      className="mb-2 block text-sm font-semibold text-blue-800"
                    >
                      {" "}
                      Post number{" "}
                    </label>
                    <input
                      type="text"
                      id="post_number"
                      className="block w-full rounded-lg border border-blue-500 bg-blue-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="DE42313253"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Payment</h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {/* Credit Card */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value="credit-card"
                          className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600 ring-offset-gray-800"
                          defaultChecked
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="credit-card"
                          className="font-medium leading-none text-gray-900"
                        >
                          Credit Card
                        </label>
                        <p
                          id="credit-card-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        className="text-sm font-medium text-blue-500 hover:text-blue-800"
                      >
                        Delete
                      </button>
                      <div className="h-3 w-px shrink-0 bg-blue-800"></div>
                      <button
                        type="button"
                        className="text-sm font-medium text-blue-500 hover:text-blue-800"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Payment on Delivery */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value="pay-on-delivery"
                          className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600 ring-offset-gray-800"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="pay-on-delivery"
                          className="font-medium leading-none text-gray-900"
                        >
                          Payment on delivery
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          +$15 payment processing fee
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        className="text-sm font-medium text-blue-500 hover:text-blue-800"
                      >
                        Delete
                      </button>
                      <div className="h-3 w-px shrink-0 bg-blue-800"></div>
                      <button
                        type="button"
                        className="text-sm font-medium text-blue-500 hover:text-blue-800"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Paypal */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="paypal-2"
                          aria-describedby="paypal-text"
                          type="radio"
                          name="payment-method"
                          value="paypal"
                          className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600 ring-offset-gray-800"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="paypal-2"
                          className="font-medium leading-none text-gray-900"
                        >
                          Paypal account
                        </label>
                        <p
                          id="paypal-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Connect to your account
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        className="text-sm font-medium text-blue-500 hover:text-blue-800"
                      >
                        Delete
                      </button>
                      <div className="h-3 w-px shrink-0 bg-blue-800"></div>
                      <button
                        type="button"
                        className="text-sm font-medium text-blue-500 hover:text-blue-800"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Delivery Methods
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {/* DHL */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="dhl"
                          aria-describedby="dhl-text"
                          type="radio"
                          name="delivery-method"
                          value="dhl"
                          className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600 ring-offset-gray-800"
                          defaultChecked
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="dhl"
                          className="font-medium leading-none text-gray-900"
                        >
                          $15 - DHL Fast Delivery
                        </label>
                        <p
                          id="dhl-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Get it by Tomorrow
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FedEx */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="fedex"
                          aria-describedby="fedex-text"
                          type="radio"
                          name="delivery-method"
                          value="fedex"
                          className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600 ring-offset-gray-800"
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="fedex"
                          className="font-medium leading-none text-gray-900"
                        >
                          Free Delivery - FedEx
                        </label>
                        <p
                          id="fedex-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Get it by Friday, 13 Dec 2023
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Express */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="express"
                          aria-describedby="express-text"
                          type="radio"
                          name="delivery-method"
                          value="express"
                          className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-600 ring-offset-gray-800"
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="express"
                          className="font-medium leading-none text-gray-900"
                        >
                          $49 - Express Delivery
                        </label>
                        <p
                          id="express-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Get it today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {" "}
                  Enter a gift card, voucher or promotional code{" "}
                </label>
                <div className="flex max-w-md items-center gap-4">
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   placeholder: focus:border-blue-500 focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                  <button
                    type="button"
                    className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-semibold text-blue-800 ">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${total}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-semibold text-blue-800 ">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">0</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-semibold text-blue-800 ">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-semibold text-blue-800 ">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      $199
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-blue-800">Total</dt>
                    <dd className="text-base font-bold text-gray-900">
                      $429.3
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center ring-1 justify-center rounded-3xl  text-blue-500 px-8 py-3 text-base font-medium  hover:text-white  hover:bg-blue-800 focus:outline-none focus:ring-blue-500"
                >
                  Proceed to Payment
                </button>

                <p className="text-sm font-normal text-gray-500 ">
                  One or more items in your cart require an account.{" "}
                  <a
                    href="#"
                    title=""
                    className="font-medium text-blue-700 underline hover:no-underline text-blue-500"
                  >
                    Sign in or create an account now.
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CheckOut;
