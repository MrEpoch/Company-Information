import { MetadataRoute } from "next";
import { getAccomplished } from "../../../sanity/sanity-utils";

export async function generateSitemaps() {
  const { data } = await getAccomplished();
  return data.map((product: any) => ({ id: product.slug }));
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const { data } = await getAccomplished();
  return data.map((product: any) => ({
    url: `https://company-information-v5d7.vercel.app/accomplished/${id}`,
    lastModified: product.publishedAt,
  }));
}
