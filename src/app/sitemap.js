import branchData from "@utils/static/branchData";

const baseUrl = "https://dentalosophy.id";

export default function sitemap() {
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

  return [...staticRoutes, ...branchRoutes];
}
