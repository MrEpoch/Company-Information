import ContactBottom from "@/components/Home/ContactBottom";
import DesignBlog from "@/components/Home/DesignBlogPosts";
import Landing from "@/components/Home/Landing";

export default async function Home() {
  return (
      <div className="min-h-screen relative w-full bg-white flex flex-col items-center h-full dark:bg-gray-800">
        <Landing />
        <DesignBlog />
        <ContactBottom /> 
      </div>
  )
}
