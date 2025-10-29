"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchPosts as fetchPostsApi } from "../../lib/wp";
import { Spinner } from "@components/ui/spinner";
import { Button } from "@components/ui/button";

const Blog = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const fetchPosts = async (targetPage = 1) => {
    setIsLoadMore(true);
    setError(null);
    try {
      const { posts: newPosts, totalPages } = await fetchPostsApi({
        page: targetPage,
      });
      setPosts((prev) =>
        targetPage === 1 ? newPosts : [...prev, ...newPosts]
      );
      setPage(targetPage);
      setHasMore(targetPage < totalPages);
    } catch (e) {
      setError("Failed to load articles");
    } finally {
      setIsFetching(false);
      setIsLoadMore(false);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  const loadMoreItems = () => {
    if (isFetching || !hasMore) return;
    fetchPosts(page + 1);
  };

  if (isFetching) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center">
        <Spinner className="size-10 text-emerald" />
        <p className="mt-3 text-gray">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="px-5 container mx-auto max-w-screen-lg grid">
        <h1 className="text-xl text-yellow mb-5 leading-normal">Blog</h1>
        <h2 className="text-4xl text-gray">
          Find tips and articles about dental health
        </h2>
        <div className="mt-5 text-gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts?.map((item, index) => {
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
                      <h3
                        className="p-1 bg-emerald rounded text-white text-sm"
                        key={tagIndex}
                      >
                        {tag}
                      </h3>
                    ))}
                  </div>
                  <h3 className="text-xs text-yellow">
                    {new Date(item.date).toDateString()}
                  </h3>

                  <Link href={`/blog/${item.slug}/`} passHref>
                    <h2 className="text-xl font-bold hover:cursor-pointer hover:text-emerald transition duration-300 ease-in-out">
                      {item?.title?.rendered || item.title}
                    </h2>
                  </Link>

                  <div
                    className="font-light"
                    dangerouslySetInnerHTML={{
                      __html: item?.excerpt?.rendered || "",
                    }}
                  />
                  <Link href={`/blog/${item.slug}/`} passHref>
                    <button className="text-yellow hover:text-emerald transition duration-300 ease-in-out">
                      Read more...
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>

          {hasMore ? (
            <div className="text-center mt-16">
              <Button
                className="px-4 py-2 text-center border bg-white font-bold border-emerald text-emerald hover:cursor-pointer hover:bg-emerald hover:text-white transition duration-200 ease-in-out"
                onClick={loadMoreItems}
                disabled={isLoadMore}
              >
                {isLoadMore && (
                  <Spinner className="size-5 text-emerald font-bold" />
                )}
                Load more
              </Button>
              {/* )} */}
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
