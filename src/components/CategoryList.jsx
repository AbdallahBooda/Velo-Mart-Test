import Image from "next/image";
import Link from "next/link";

const staticCategories = [
  {
    _id: "1",
    // slug: "electronics",
    name: "Electronics",
    media: {
      mainMedia: {
        image: { url: "/pro1.jpg" },
      },
    },
  },
  {
    _id: "2",
    // slug: "fashion",
    name: "Fashion",
    media: {
      mainMedia: {
        image: { url: "/pro2.jpeg" },
      },
    },
  },
  {
    _id: "3",
    // slug: "home-decor",
    name: "Home Decor",
    media: {
      mainMedia: {
        image: { url: "/pro3.jpg" },
      },
    },
  },
  {
    _id: "4",
    // slug: "jkjkn",
    name: "koj",
    media: {
      mainMedia: {
        image: { url: "/pro4.avif" },
      },
    },
  },
];

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {staticCategories.map((item) => (
          <Link
            href="/category"
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt="Slide image"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>

            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
