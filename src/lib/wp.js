export const PER_PAGE_DEFAULT = 10;
export const BASE_URL =
  "https://wp.dentalosophy.id/wp-json/wp/v2/posts?status=publish&_embed&_fields=id,slug,title,excerpt,content,date,modified,author,categories,tags,_embedded";

export function buildPostsUrl({ page = 1, perPage = PER_PAGE_DEFAULT } = {}) {
  return `${BASE_URL}&per_page=${perPage}&page=${page}`;
}

export async function fetchPosts({ page = 1, perPage = PER_PAGE_DEFAULT } = {}) {
  try {
    const url = buildPostsUrl({ page, perPage });
    const res = await fetch(url);
    if (!res.ok) {
      return { posts: [], totalPages: 1 };
    }
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    const data = await res.json();
    return { posts: data, totalPages };
  } catch (e) {
    return { posts: [], totalPages: 1 };
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const url = `${BASE_URL}&slug=${encodeURIComponent(slug)}`;
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return Array.isArray(data) ? data[0] : null;
  } catch (e) {
    return null;
  }
}

export async function fetchAllPostSlugs() {
  // Fetch first page to determine total pages
  const first = await fetchPosts({ page: 1, perPage: 100 });
  const slugs = (first.posts || []).map((p) => p.slug).filter(Boolean);
  const totalPages = first.totalPages || 1;
  if (totalPages <= 1) return slugs;

  // Fetch remaining pages sequentially to avoid hammering the API
  for (let p = 2; p <= totalPages; p++) {
    const { posts } = await fetchPosts({ page: p, perPage: 100 });
    slugs.push(
      ...posts.map((post) => post.slug).filter(Boolean)
    );
  }
  // Deduplicate in case of any overlaps
  return Array.from(new Set(slugs));
}
