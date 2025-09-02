"use client";
import Link from "next/link";
import Image from "next/image";

import { CartStore } from "@/store/CartStore";
import { ProductStore } from "@/store/ProductStore";

const ProductList = ({ limit }) => {
  const products = ProductStore((state) => state.products);
  const addToCart = CartStore((state) => state.addToCart);

  // Apply limit only if provided
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="mt-12 px-6 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {displayedProducts.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.thumbnail} // ✅ DummyJSON uses "thumbnail"
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
              e.preventDefault(); // Stop link navigation when adding to cart
              addToCart(product);
            }}
            className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold"
          >
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
