import Image from "next/image";
import GreenHands from "@/assets/PlantInHands.webp";
import GreenThing from "@/assets/GreenThing.webp";
import Link from "next/link";
import CopyItem from "@/components/CopyItem";

export default async function Home() {
  return (
      <div className="min-h-screen relative w-full bg-white flex flex-col items-center h-full dark:bg-gray-800">
        <section className="h-full mt-[12rem] w-full flex items-center flex-col min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none 
      text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We Preserve, Protect and Restore</h1>
  <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 
      dark:text-gray-400">Join our cause eliminating eco challanges through innovative ideas and solutions.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link href="/pricing" className="inline-flex justify-center items-center 
      py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-500 hover:bg-lime-600 
      focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900">
                        Join Us
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    <Link href="/about" className="inline-flex justify-center 
      items-center py-3 px-5 text-base font-medium text-center text-gray-900 
      rounded-lg border border-gray-300 hover:bg-gray-100 
      focus:ring-4 focus:ring-gray-100 dark:text-white 
      dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Learn more
                    </Link>  
                </div>
            </div>
        </section>
        <section className="min-h-screen 
      bg-lime-400 dark:bg-lime-500
      relative w-full h-full flex flex-col justify-between">
            <div className="custom-shape-divider-top-1694848176">
                <svg className="text-white dark:text-gray-800" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="currentColor" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="h-full w-full mt-[20rem] flex flex-col max-w-screen-xl px-4 mx-auto">
                <div className="h-full w-full flex gap-[3rem] items-center justify-center">
                    <Link className="hover:brightness-75 home-hover-image relative hover:scale-105 transition duration-300" href="/blog/how-we-protect-nature">
                        <div className="absolute opacity-0 flex text-2xl items-center justify-center h-full w-full">
                        </div>
                        <Image src={GreenHands} className="object-cover hover:brightness-75 aspect-video h-full w-full max-w-[500px]" alt="logo" width={500} height={200} />
                    </Link>
                    <Link className="hover:brightness-75 hover:scale-105 transition duration-300" href="/about">
                        <Image src={GreenThing} className="object-cover aspect-video w-full max-w-[500px]" alt="logo" width={500} height={200} />
                    </Link>
                </div>
                <div className="flex flex-col gap-7 justify-center h-full w-full mt-[10rem] items-center ">
                    <p className="text-center text-4xl font-extrabold leading-none text-gray-900 dark:text-white">
                        We are proud to write about what we accomplish through our blog, check it out!
                    </p>

                    <Link href="/about" className="inline-flex justify-center 
      items-center py-5 px-10 text-base font-medium text-center text-gray-900 
      rounded hover:bg-gray-100 bg-black 
      focus:ring-4 focus:ring-gray-100 dark:text-white 
      dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        See Blog
                    </Link>  
                </div>
            </div>
        </section>
        <section className="min-h-screen dark:bg-gray-800 relative w-full flex flex-col items-center">
            <div className="custom-shape-divider-top-1694848176">
                <svg className="text-lime-400 dark:text-lime-500" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="currentColor" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="py-8 mt-[15rem] px-4 mx-auto max-w-screen-xl h-full text-center lg:py-16">
                 <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none 
      text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contact Us</h1>
                    <CopyItem value="dev@stencukpage.com">
                    <button className="inline-flex justify-center items-center py-5 px-10 text-base font-medium text-center text-gray-900">
                        <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
      Email
                    </button>
                    </CopyItem>
            </div>
        </section>
      </div>
  )
}
