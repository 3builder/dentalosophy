import branchData from "@utils/static/branchData";

export async function generateMetadata({ params }) {
  const { slug } = (await params) || {};
  const branch = branchData.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!branch) {
    return {
      title: "Cabang Dentalosophy",
      robots: "noindex, follow",
      alternates: {
        canonical: `https://dentalosophy.id/branch/${slug}`,
      },
      description: "Halaman cabang tidak ditemukan.",
    };
  }

  const title =
    branch.seo?.title ||
    `Dentalosophy ${branch.location} – Klinik Gigi ${branch.city || "Terpercaya"}`;
  const description =
    branch.seo?.description ||
    branch.headers?.description ||
    `Klinik gigi Dentalosophy di ${branch.location}.`;
    const keywords = branch.seo?.keywords || branch.headers?.keywords;

  return {
    title,
    robots: "index, follow",
    alternates: {
      canonical: `https://dentalosophy.id/branch/${branch.slug}`,
    },
    description,
    keywords,
  };
}

export default function BranchSlugLayout({ children }) {
  return <section>{children}</section>;
}
