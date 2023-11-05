import HeaderMenu from "@/components/Header/HeaderMenu"
import HeaderImg from "@/components/Header/HeaderImg"
import Link from "next/link"
import HeaderLinks from "@/components/Header/HeaderLinks"

export default function Header() {
    return (
        <nav className="bg-white dark:bg-darkmode-500">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link href="/" className="flex items-center">
                <HeaderImg />
            </Link>
            <HeaderMenu />
            <HeaderLinks />
          </div>
        </nav>
    )
}
