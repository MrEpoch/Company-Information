import { getPosts } from "../../../sanity/sanity-utils"

export default async function Page() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen w-full dark:bg-gray-800">
        </div>
    )
}
