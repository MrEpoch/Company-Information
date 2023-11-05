import Image from "next/image";
import Link from "next/link";
import GreenHands from "@/assets/PlantInHands.webp";
import GreenThing from "@/assets/GreenThing.webp";

export default function DesignBlog() {
    return (
    <section className="min-h-screen 
      bg-lime-400 dark:bg-lime-500
      relative w-full h-full flex flex-col justify-between">
            <div className="custom-shape-divider-top-1694848176">
                <svg className="text-white dark:text-darkmode-500" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="currentColor" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="h-full w-full mt-[20rem] flex flex-col max-w-screen-xl px-4 mx-auto">
                <p className="sm:mb-[10rem] mb-[4rem] sm:text-center text-xl sm:text-4xl font-extrabold leading-none text-gray-900 dark:text-white">
                    We are proud to write about what we accomplish through our blog, check it out!
                </p>

                <div className="h-full w-full flex-col md:flex-row flex gap-[3rem] items-center justify-center">
                    <Link className="hover:brightness-75 home-hover-image relative hover:scale-105 transition duration-300" href="/blog/how-we-protect-nature">
                        <div className="absolute opacity-0 flex text-2xl items-center justify-center h-full w-full">
                        </div>
                        <Image src={GreenHands} className="object-cover hover:brightness-75 aspect-video h-full w-full max-w-[500px]" alt="logo" width={500} height={200} />
                    </Link>
                    <Link className="hover:brightness-75 hover:scale-105 transition duration-300" href="/blog/saving-dry-areas">
                        <Image src={GreenThing} className="object-cover aspect-video w-full max-w-[500px]" alt="logo" width={500} height={200} />
                    </Link>
                </div>
                <div className="flex flex-col gap-7 justify-center h-full w-full mt-[10rem] items-center ">
                    
                    <Link href="/blog" className="inline-flex justify-center 
        items-center py-5 px-10 text-base font-medium text-center 
      rounded  bg-black
      focus:ring-4 text-white 
      border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                        See Blog
                    </Link>  
                </div>
            </div>
        </section>
    )
}
