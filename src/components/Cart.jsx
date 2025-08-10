"use client";
import { CartStore } from "@/store/CartStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const cart = CartStore((state) => state.cart);
  const removeFromCart = CartStore((state) => state.removeFromCart);
  const clearCart = CartStore((state) => state.clearCart);

  const [isFavorited, setIsFavorited] = useState({});

  const toggleFavorite = (id) => {
    setIsFavorited((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="max-w-screen-lg mx-auto mt-16 flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24">
          <h2 className="text-base">Product</h2>
          <h2 className="text-base">Product Name</h2>
          <h2 className="text-base">Price</h2>
          <h2 className="text-base">Quantity</h2>
          <h2 className="text-base">Subtotal</h2>
          <h2 className="text-base"></h2>
        </div>

        {/* Static Cart Items */}
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border border-blue-800 p-4 rounded-xl"
            >
              <Image
                className="h-20 w-20 object-contain"
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                priority
              />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <p>{item.quantity}</p>
              <p className="hidden md:flex">${item.price * item.quantity}</p>
              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="text-sm flex items-center gap-1"
                >
                  <svg
                    className={`h-5 w-5 ${
                      isFavorited[item.id] ? "text-red-600" : "text-gray-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isFavorited[item.id] ? "red" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  {/* Favorite */}
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm flex items-center gap-1"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  {/* Remove */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-2">
          <Link
            href="/products"
            className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold "
          >
            Return to Shop
          </Link>
          <button
            onClick={clearCart}
            className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold "
          >
            Clear Cart
          </button>
        </div>

        {/* Coupon + Cart Total */}
        <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between">
          {/* Coupon Input */}
          <div className="flex items-center md:justify-between justify-center mt-4 gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-blue-500 rounded-3xl p-2 w-[160px] lg:w-[260px] text-sm md:text-base"
            />
            <button className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold ">
              Apply Coupon
            </button>
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between flex-col gap-6 border py-8 px-6 md:w-[470px]">
            <p className="text-xl font-bold text-blue-800">Cart Total</p>
            {/* <div className="flex justify-between mt-4 border-b">
              <p className="text-xl font-semibold text-blue-800">Total:</p>
              <p className="text-xl font-semibold text-blue-800">${total}</p>
            </div> */}
            <div className="flex justify-between mt-4 border-b">
              <p className="text-xl font-semibold text-blue-800">Subtotal:</p>
              <p className="text-xl font-semibold text-blue-800">${total}</p>
            </div>
            <div className="flex justify-between mt-4 border-b">
              <p className="text-xl font-semibold text-blue-800">Shipping:</p>
              <p className="text-xl font-semibold text-blue-800">Free</p>
            </div>
            <div className="p-2">
              <button className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold ">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
