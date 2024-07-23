"use client";

import ImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import Link from "next/link";

function urlFor(source: string) {
  return ImageUrlBuilder(client).image(source);
}

export default function CardInfo({
  info,
  site = "blog",
}: {
  info: any;
  site?: string;
}) {
  return (
    <Link
      href={`/${site}/${info.slug}`}
      className="aspect-[7/3] w-full 
        max-w-[400px] rounded bg-gray-100 dark:bg-gray-700 text-white flex relative transition duration-300
        flex-col min-h-[180px] sm:min-h-[300px] hover:brightness-75"
    >
      <h3 className="absolute bg-black/30 p-6 bottom-0 w-full text-center">
        {info.title}
      </h3>
      <Image
        className="rounded w-full h-full object-cover"
        src={urlFor(info.image.asset._ref).url().toString()}
        alt={info.title}
        width={800}
        height={400}
      />
    </Link>
  );
}
