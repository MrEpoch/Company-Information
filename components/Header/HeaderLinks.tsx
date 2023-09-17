import Link from "next/link";
import ThemeSwitch from "../../src/app/ThemeSwitch";

export default function HeaderLinks() {
    return (
     <div className="hidden w-full md:block md:w-auto" id="is-hidden">
       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                    <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-lime-700 rounded 
        md:bg-transparent md:text-lime-700 md:p-0 dark:text-white md:dark:text-lime-500" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
        md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                </li>
                <li>
                    <Link href="/services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                </li>
                <li>
                    <ThemeSwitch className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
                        md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white 
                        md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white 
                        md:dark:hover:bg-transparent" />
                </li>
                <li>
                    <Link href="/pricing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
                </li>
                <li>
                    <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-white md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>
          </ul>
        </div> 
    )
}
