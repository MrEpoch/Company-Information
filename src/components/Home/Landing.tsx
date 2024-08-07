import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="h-full gap-[3rem] py-16 w-full flex items-center flex-col min-h-screen">
      <div className="sm:py-8 px-4 flex flex-col items-center  text-center lg:py-16">
        <h1
          className="mb-12 text-2xl sm:text-4xl font-extrabold tracking-tight leading-none 
          text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          We Preserve, Protect and Restore
        </h1>
        <p
          className="mb-8 text-sm sm:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 
          dark:text-gray-400"
        >
          Join our cause eliminating eco challanges through innovative ideas and
          solutions.
        </p>
        <div className="flex flex-col mt-[4rem] space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center 
          py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-500 hover:bg-lime-600 
          focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
          >
            Join Us
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex justify-center 
          items-center py-3 px-5 text-base font-medium text-center text-gray-900 
          rounded-lg border border-gray-300 hover:bg-gray-100 
          focus:ring-4 focus:ring-gray-100 dark:text-white 
          dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more
          </Link>
        </div>
      </div>
      <Image
        loading="eager"
        priority
        width={800}
        height={400}
        src={"/assets/trees.svg"}
        alt="logo"
      />
    </section>
  );
}
