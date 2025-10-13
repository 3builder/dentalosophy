"use client";
import blogData from "@utils/static/blogData";
import Link from "next/link";
import { useState } from "react";

const Blog = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="px-5 container mx-auto max-w-screen-lg grid">
        <h1 className="text-xl text-yellow mb-5 leading-normal">Blog</h1>
        <h2 className="text-4xl text-gray">
          Find tips and articles about dental health
        </h2>
        <div className="mt-5 text-gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogData?.articles?.map((item, index) => {
              return (
                <div key={index} className="">
                  {/* {item.node.featuredImage?.node?.mediaItemUrl && (
                                <Link
                                    href={`/blog/${item.node?.slug}/`}
                                    passHref
                                >
                                    <img
                                        className='rounded hover:cursor-pointer'
                                        src={
                                            post.node.featuredImage?.node
                                                ?.mediaItemUrl
                                        }
                                        alt='featured img'
                                    />
                                </Link>
                            )} */}
                  <div className="flex gap-2 mt-2 mb-2 ">
                    {item.tags?.map((tag, tagIndex) => (
                      <p
                        className="p-1 bg-emerald rounded text-white text-sm"
                        key={tagIndex}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-yellow">
                    {item.date} - {item.author}
                  </p>

                  <Link href={`/blog/${item.slug}/`} passHref>
                    <h2 className="text-xl font-bold hover:cursor-pointer hover:text-emerald transition duration-300 ease-in-out">
                      {item.title}
                    </h2>
                  </Link>

                  <div className="font-light">{item.description}</div>
                  <Link href={`/blog/${item.slug}/`} passHref>
                    <button className="text-yellow hover:text-emerald transition duration-300 ease-in-out">
                      Read more...
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>

          {blogData.nextPage !== null ? (
            <div className="text-center mt-16">
              {isFetching ? (
                <div className="">Loading...</div>
              ) : (
                <button
                  className="px-4 py-2 text-center border border-emerald text-emerald hover:cursor-pointer hover:bg-emerald hover:text-white transition duration-200 ease-in-out"
                  onClick={() => loadMoreItems(endCursor)}
                >
                  Load more
                </button>
              )}
            </div>
          ) : null}
          {error && (
            <div className="w-full flex justify-center my-10">
              No articles available
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
