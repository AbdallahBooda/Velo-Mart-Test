// components/CategoryList.jsx

import Link from "next/link";
import Image from "next/image";

// Map category slugs to specific image paths in your public folder
const categoryImages = {
  smartphones: "/smartphones.jpg",
  laptops: "/laptops.jpg",
  fragrances: "/fragrances.jpg",
  skincare: "/skincare.jpg",
  groceries: "/groceries.jpg",
  "home-decoration": "/home-decoration.jpg",
  furniture: "/furniture.jpg",
  tops: "/tops.jpg",
  "womens-dresses": "/womens-dresses.jpg",
  "womens-shoes": "/womens-shoes.jpg",
  "mens-shirts": "/mens-shirts.jpg",
  "mens-shoes": "/mens-shoes.jpg",
  "mens-watches": "/mens-watches.jpg",
  "womens-watches": "/womens-watches.jpg",
  "womens-bags": "/womens-bags.jpg",
  "womens-jewellery": "/womens-jewellery.jpg",
  sunglasses: "/sunglasses.jpg",
  automotive: "/automotive.jpg",
  motorcycle: "/motorcycle.jpg",
  lighting: "/lighting.jpg",
  // Add a default image for any categories not in the list
  default: "/pro1.jpg",
};

// Server Component: Fetches and renders the list of categories
const CategoryList = async () => {
  const res = await fetch("https://dummyjson.com/products/category-list");
  const categories = await res.json();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((cat, index) => {
          const slug = typeof cat === "string" ? cat : cat.slug;
          const name = typeof cat === "string" ? cat : cat.name;

          // Get the image URL from the map, falling back to a default
          const imageUrl = categoryImages[slug] || categoryImages.default;

          return (
            <Link
              href={`/category/${slug}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
              key={index}
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide capitalize">
                {name.replace("-", " ")}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
