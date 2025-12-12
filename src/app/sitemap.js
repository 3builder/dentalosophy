import branchData from "@utils/static/branchData";
import { fetchAllPostSlugs } from "../lib/wp";

const baseUrl = "https://dentalosophy.id";

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/blog",
    "/gallery",
    "/gallery/compare",
    "/doctors",
    "/our-treatments",
    "/promo",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1.0 : 0.7,
  }));

  const branchRoutes = branchData.map((branch) => ({
    url: `${baseUrl}/branch/${branch.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Fetch all blog post slugs and create routes
  const blogSlugs = await fetchAllPostSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...branchRoutes, ...blogRoutes];
}
