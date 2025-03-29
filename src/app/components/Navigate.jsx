import Link from "next/link";

export const Navigate = () => {
  return (
    <nav className="flex items-center gap-10">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/product/12">Product</Link>
    </nav>
  );
};
