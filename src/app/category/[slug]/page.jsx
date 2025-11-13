// app/category/[slug]/page.jsx

import Category from "@/components/Category";

// Server Component: Fetches data for a specific category page
export default async function CategoryPage({ params }) {
  const { slug } = params;

  const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const data = await res.json();
  const products = data.products;

  return (
    <>
      <Category slug={slug} products={products} />
    </>
  );
}