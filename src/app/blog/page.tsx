import CardInfo from "@/components/CardInfo";
import { getPosts } from "../../../sanity/sanity-utils"

export default async function Page() {
    const { data } = await getPosts();

    return (
        <div className="min-h-screen w-full dark:bg-gray-800">
            <div className="max-w-screen-2xl flex flex-wrap gap-5 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            {data.map((post: any, i:number) => {
                return (
                    <CardInfo key={i} info={post} />
                ) 
            })}
            </div>
        </div>
    )
}
