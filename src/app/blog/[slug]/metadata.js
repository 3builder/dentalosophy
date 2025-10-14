export function generateMetadataFromPost(post, slug) {
  const defaultTitle = "Dentalosophy Blog";
  const defaultDescription =
    "Temukan tips dan trik seputar kesehatan gigi dan mulut di Dentalosophy Blog.";
  const defaultImage = "/images/logo.png";

  if (!post) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        images: [defaultImage],
      },
      twitter: {
        card: "summary_large_image",
        title: defaultTitle,
        description: defaultDescription,
        images: [defaultImage],
      },
    };
  }

  const title = post?.title?.rendered || post?.title || defaultTitle;
  const description =
    post?.yoast_head_json?.description ||
    post?.excerpt?.rendered?.replace(/<[^>]+>/g, "").slice(0, 150) ||
    defaultDescription;

  const image =
    post?.yoast_head_json?.og_image?.[0]?.url ||
    post?.featured_media_url ||
    defaultImage;

  const fullTitle = `${title} | Dentalosophy - Blog`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      images: [image],
      type: "article",
      url: `https://dentalosophy.id/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
