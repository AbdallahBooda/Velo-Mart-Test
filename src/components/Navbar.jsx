import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className=" top-0 left-0 right-0 z-50 shadow-md h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE VIEW */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Velo Mart</div>
        </Link>
        <Menu />
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT SECTION */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <svg
              className="text-blue-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="26"
              height="26"
              fill="currentColor"
            >
              <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7-2 16-16L64 160l-16 0c-8.8 0-16 7.2-16 16s7-2 16-16l16 0 176 0c8.8 0 16 7.2 16 16s-7 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0z" />
            </svg>

            <div className="text-2xl tracking-wide">Velo Mart</div>
          </Link>

          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Shop</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
