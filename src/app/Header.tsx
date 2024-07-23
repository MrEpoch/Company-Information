import HeaderMenu from "@/components/Header/HeaderMenu";
import Link from "next/link";
import HeaderLinks from "@/components/Header/HeaderLinks";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white w-full dark:bg-darkmode-500">
      <div className="w-full mx-auto max-w-screen-xl px-4 flex-wrap flex gap-4 items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        </Link>
        <HeaderMenu />
        <HeaderLinks />
      </div>
    </nav>
  );
}
