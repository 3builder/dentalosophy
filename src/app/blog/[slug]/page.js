// export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPostBySlug } from "@lib/wp";
import { generateMetadataFromPost } from "./metadata";
import { ShareButton } from "./share";

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
      <h1 className="text-3xl md:text-5xl chivo font-bold text-gray mb-3">
        {post?.title?.rendered || post?.title}
      </h1>
      <div className="border-t border-1 border-yellow mt-8 mb-4" />
      <p className=" text-emerald font-bold">By {post?.name || "Admin"}</p>
      <p className=" text-emerald font-bold mb-6">
        Published on {post?.date ? new Date(post.date).toDateString() : ""}
      </p>

      <div
        className="prose prose-emerald max-w-none text-gray font-light"
        dangerouslySetInnerHTML={{ __html: post?.content?.rendered || "" }}
      />
      <div className="my-5">
        <p>Share this article</p>
        <ShareButton title={post?.title?.rendered || post?.title} />
      </div>
      <div className="mt-6">
        <Link
          href="/blog"
          className="text-yellow hover:text-emerald font-bold transition duration-300 ease-in-out"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
