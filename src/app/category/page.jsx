// app/category/page.jsx

import CategoryList from "@/components/CategoryList";

export const metadata = {
  title: "Categories",
  description: "Browse all product categories",
};

// This is a Server Component. It orchestrates the page layout.
const CategoryPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold px-4 my-6">All Categories</h1>
      <CategoryList />
    </>
  );
};

export default CategoryPage;