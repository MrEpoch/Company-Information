import { PortableText } from "@portabletext/react";
import { getAccomplishedOne } from "../../../../sanity/sanity-utils";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { redirect } from "next/navigation";

function urlFor(source: string) {
  return ImageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="w-full my-16 flex items-center justify-center">
          <Image
            className="rounded-lg"
            alt={value.alt || " "}
            src={urlFor(value.asset._ref).url().toString()}
            width={800}
            height={400}
          />
        </div>
      );
    },
  },
};

export default async function Accomplished({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const { data } = await getAccomplishedOne(slug);
  if (!data) throw redirect("/");
  return (
    <div className="min-h-screen dark:bg-darkmode-500 w-full">
      <div
        className="blog flex flex-col items-center 
        max-w-screen-md text-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
      >
        <h1 className="w-full text-3xl text-center">{data.title}</h1>
        <Image
          className="w-full max-w-[800px] mt-[5rem] h-full object-cover"
          src={urlFor(data.image.asset._ref).url().toString()}
          alt={data.title}
          width={800}
          height={400}
        />
        <div className="flex blog flex-col gap-[4rem]">
          <PortableText value={data.body} components={ptComponents} />
        </div>
      </div>
    </div>
  );
}
