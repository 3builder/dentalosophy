// export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPostBySlug } from "@lib/wp";
import { generateMetadataFromPost } from "./metadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  return generateMetadataFromPost(post, slug);
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="px-5 container mx-auto max-w-screen-lg grid">
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-yellow hover:text-emerald transition duration-300 ease-in-out"
        >
          ← Back to Blog
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray mb-3">
        {post?.title?.rendered || post?.title}
      </h1>
      <p className="text-xs text-yellow mb-6">
        {post?.date ? new Date(post.date).toDateString() : ""}
      </p>

      <div
        className="prose prose-emerald max-w-none text-gray font-light"
        dangerouslySetInnerHTML={{ __html: post?.content?.rendered || "" }}
      />
    </div>
  );
}
