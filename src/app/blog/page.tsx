import CardInfo from "@/components/CardInfo";
import { getPosts } from "../../../sanity/sanity-utils"

export default async function Page() {
    const { data } = await getPosts();

    return (
        <div className="min-h-screen w-full dark:bg-gray-800">
            <h1>Blog Posts</h1>
            {data.map((post: any) => {
                <CardInfo info={post} />                
            })}
        </div>
    )
}
