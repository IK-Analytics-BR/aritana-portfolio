import { MetadataRoute } from "next";
import { products } from "@/lib/data";

const BASE_URL = "https://aritana.ikanalytics.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                     lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/sobre`,          lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/experiencia`,    lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/produtos`,       lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/tecnologias`,    lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/ia`,             lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/contato`,        lastModified: new Date(), priority: 0.7 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/produtos/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
