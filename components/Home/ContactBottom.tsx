import CopyItem from "../CopyItem";

export default function ContactBottom() {
    return (
     <section className="min-h-screen py-[7rem]  relative w-full flex flex-col items-center">
            <div className="custom-shape-divider-top-1694848176">
                <svg className="text-lime-400 dark:text-lime-500" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="currentColor" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="py-8 mt-[15rem] gap-[3rem] px-4 mx-auto max-w-screen-xl h-full text-center lg:py-16">
                 <h1 className="text-4xl mb-[10rem] my-[5rem] font-extrabold tracking-tight leading-none 
      text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contact Us</h1>
  <div className="flex items-center justify-center max-[380px]:flex-col flex-row gap-5">
                        <CopyItem value="dev@stencukpage.com">
                            <button className="dark:text-white hover:brightness-90 font-bold inline-flex justify-center items-center 
        py-4 px-10 text-base bg-lime-400 dark:bg-lime-500 rounded-3xl text-center text-gray-900 border-lime-400 
        dark:border-lime-500 border-2 transition duration-300">
                            <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                                  Email
                            </button>
                        </CopyItem>
                        <a href="https://stencukpage.com/" className="dark:text-white font-bold inline-flex justify-center items-center 
        py-4 px-10 text-base bg-transparent border-2 hover:bg-lime-400 dark:hover:bg-lime-500 transition duration-300 
        border-lime-400 dark:border-lime-500 rounded-3xl text-center text-gray-900">
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                            <p>Main</p>
                        </a>
                    </div>

            </div>
        </section>       
    )
}
