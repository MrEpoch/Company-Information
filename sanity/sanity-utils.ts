import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getPosts() {
    const data = await client.fetch(
        groq`*[_type == "post"]{
            _id,
            _createAt,
            title,
            "slug": slug.current,
            body
        }`
    )

    return { data }
}

export async function getPostSlugs() {
    const slugs = await client.fetch(
        groq`*[_type == "post"]{
            slug
        }`
    )
    return { data: slugs }
}

export async function getPost(slug: string) {
    const data = await client.fetch(
        groq`*[_type == "post" && slug.current == $slug]{
            _id,
            _createAt,
            title,
            "slug": slug.current,
            body
        }[0]`,
        {
            slug: slug
        }
    )

    return { data }
}
