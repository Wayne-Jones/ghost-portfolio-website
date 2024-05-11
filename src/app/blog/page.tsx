import { Post } from "@/helper/types";
import { Metadata } from "next";
import Link from "next/link";
const { LOCAL_URL } = process.env;

export const metadata: Metadata = {
  title: "Blog",
};

async function getData(slug: string) {
  const res = await fetch(`${LOCAL_URL}/api/post/tag/${slug}`, {
    next: { revalidate: 60 },
  });
  const posts: Post[] = (await res.json()) as Post[];
  return posts;
}

export default async function Blog() {
  const posts = await getData("Blog");
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Blog</h1>
        <ul className="text-center">
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
