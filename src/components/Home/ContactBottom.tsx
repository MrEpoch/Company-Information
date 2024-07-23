import Link from "next/link";
import CopyItem from "../CopyItem";

export default function ContactBottom() {
  return (
    <section className="min-h-screen py-[7rem]  relative w-full flex flex-col items-center">
      <div className="py-8 px-4 items-center flex flex-col gap-4 mx-auto max-w-screen-xl h-full text-center lg:py-16">
        <h2
          className="text-4xl mb-[10rem] my-[5rem] font-extrabold tracking-tight leading-none 
      text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Contact Us
        </h2>
        <Link
          href="/contact"
          className="hover:translate-y-[5px] dark:bg-lime-400 hover:translate-x-[5px] duration-300 transition w-64 h-64 bg-lime-300 rounded flex items-center justify-center"
        >
          <svg
            className="w-48 transform -rotate-45 h-48 text-black dark:text-darkmode-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
