import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderImg from "@/components/Header/HeaderImg";
import Link from "next/link";
import HeaderLinks from "@/components/Header/HeaderLinks";

export default function Header() {
  return (
    <nav className="bg-white w-full dark:bg-darkmode-500">
      <div className="w-full mx-auto max-w-screen-xl px-4 flex gap-4 items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <HeaderImg />
        </Link>
        <HeaderMenu />
        <HeaderLinks />
      </div>
    </nav>
  );
}
