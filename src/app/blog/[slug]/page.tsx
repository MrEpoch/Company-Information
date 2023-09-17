import { PortableText } from "@portabletext/react";
import { getPost } from "../../../../sanity/sanity-utils";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import "./style.css";

function urlFor(source: string) {
  return ImageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
      image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
          <div className="w-full my-[4rem] flex items-center justify-center">
            <Image
                className="rounded-lg"
              alt={value.alt || ' '}
              src={urlFor(value.asset._ref).url().toString()}
              width={800}
              height={400}
              />
          </div>
      )
    }
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const { data } = await getPost(slug);

    return (
        <div className="min-h-screen dark:bg-gray-800 w-full">
            <div className="blog-post-container max-w-screen-2xl text-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h1>{data.title}</h1>
                <div className="flex flex-col gap-[4rem]">
                    <PortableText value={data.body} components={ptComponents} />
                </div>
            </div>
        </div>
    )
}
