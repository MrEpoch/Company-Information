import ContactBottom from "@/components/Home/ContactBottom";
import DesignBlog from "@/components/Home/DesignBlogPosts";
import Landing from "@/components/Home/Landing";

export default async function Home() {
  return (
    <div className="relative w-full flex flex-col items-center h-full mx-auto max-w-screen-xl px-4">
      <Landing />
      <DesignBlog />
      <div className="relative w-screen">
        <div className="h-64" />
        <div className="bottomDivider">
          <svg
            className="text-lime-400 dark:text-lime-500"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <ContactBottom />
    </div>
  );
}
