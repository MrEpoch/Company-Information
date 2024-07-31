import { MetadataRoute } from "next";
import { getAccomplished } from "../../sanity/sanity-utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getAccomplished();
  return [
    {
      url: "https://company-information-v5d7.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://company-information-v5d7.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://company-information-v5d7.vercel.app/accomplished",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://company-information-v5d7.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...data.map((product: any) => ({
      url: `https://company-information-v5d7.vercel.app/accomplished/${product.slug}`,
      lastModified: product.publishedAt,
      changeFrequency: "never",
      priority: 0.5,
    })),
  ];
}
