"use client";
import Link from "next/link";
import Image from "next/image";

import { CartStore } from "@/store/CartStore";
import { ProductStore } from "@/store/ProductStore";

const ProductList = () => {
  const products = ProductStore((state) => state.products);
  const addToCart = CartStore((state) => state.addToCart);

  return (
    <>
      <div className="mt-12 px-6 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {products.map((p) => (
          <Link
            href=""
            key={p.id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative w-full h-80">
              <Image
                src={p.image}
                alt={p.title}
                // className="w-full h-48 object-cover"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
                priority
                loading="eager"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium line-clamp-1">{p.title}</span>
              <span className="font-semibold">${p.price}</span>
            </div>
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600">{p.price} USD</p> */}

            <div className="text-sm text-gray-500 line-clamp-2">
              {p.description}
            </div>

            <button
              onClick={() => addToCart(p)}
              className="rounded-2xl ring-1 ring-blue-500 text-blue-500 w-max py-2 px-4 text-xs hover:bg-blue-800 hover:text-white font-semibold "
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
