import Image from "next/image";
import Contact from "@/assets/Contact.webp";
import CopyItem from "@/components/CopyItem";

export default function Page() {
    return (
        <div className="min-h-screen w-full dark:bg-gray-800">
            <div className="flex flex-col h-full w-full min-h-screen">
                <div className="w-full aspect-video max-h-[650px]">
                    <Image src={Contact} alt="Contact" className="w-full rounded-t-md h-full object-cover" />
                </div>
                <div className="w-full h-full flex">
                    <CopyItem value="dev@stencukpage.com">
                        <button className="bg-transparent flex 
        biggify items-center justify-center h-full w-full aspect-square">
                            <svg className="transition w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                        </button>
                    </CopyItem>
                    <a href="https://stencukpage.com" className="biggify rounded-lg bg-lime-500 flex items-center justify-center w-full">
                        <svg className="w-20 h-20 transition text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                    </a>
                    <CopyItem value="+1 (555) 555-555">
                        <button className="bg-gray-transparent flex biggify items-center justify-center w-full">
                            <svg className="w-20 transition h-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24">
                                <title>phone</title>
                                <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,
                17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 
                20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 
                0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                            </svg>
                        </button>
                    </CopyItem>
                </div>
            </div>
        </div>
    )
}
