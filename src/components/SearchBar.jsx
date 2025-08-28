"use client";

import { useRouter } from "next/navigation";
import { ProductStore } from "@/store/ProductStore";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();
  const products = ProductStore((state) => state.products);

  // ✅ initialize react-hook-form
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const name = data.name.toLowerCase();

    // find product by name (case-insensitive)
    const product = products.find((p) =>
      p.title.toLowerCase().includes(name)
    );

    if (product) {
      router.push(`/products/${product.id}`);
    } else {
      alert("Product not found");
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        {...register("name")} // ✅ register input with RHF
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
