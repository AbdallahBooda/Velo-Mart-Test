// components/Category.jsx

"use client";

import { CartStore } from "@/store/CartStore";
import Link from "next/link";
import Image from "next/image";

// Client Component: Receives product data and handles user interaction
const Category = ({ slug, products }) => {
  const addToCart = CartStore((state) => state.addToCart);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Dynamic header for the category page */}
      <h2 className="mt-12 text-xl font-semibold capitalize">
        Products in {slug.replace(/-/g, " ")}
      </h2>
      <div className="mt-12 px-6 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {products.map((product) => (
          <Link
            href={`/category/${slug}/product/${product.id}`}
            key={product.id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
                priority
                loading="eager"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium line-clamp-1">{product.title}</span>
              <span className="font-semibold">${product.price}</span>
            </div>
            <div className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold"
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;