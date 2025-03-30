"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigate = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gray-800 flex items-center justify-between md:px-20 p-4">
      <h1 className="text-xl font-black">Blog</h1>
      <nav className="flex items-center gap-10">
        <Link
          href="/"
          className={pathname === "/" ? "text-blue-600 font-bold" : ""}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "text-blue-600 font-bold" : ""}
        >
          About
        </Link>
        <Link
          href="/product/1"
          className={
            pathname.startsWith === "/product/1"
              ? "text-blue-600 font-bold"
              : ""
          }
        >
          Product
        </Link>
      </nav>
    </header>
  );
};
