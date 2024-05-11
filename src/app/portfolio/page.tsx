import { Post } from "@/helper/types";
import { Metadata } from "next";
import Link from "next/link";
const { LOCAL_URL } = process.env;

export const metadata: Metadata = {
  title: "Portfolio",
};

async function getData(slug: string) {
  const res = await fetch(`${LOCAL_URL}/api/post/tag/${slug}`, {
    next: { revalidate: 60 },
  });
  const posts: Post[] = (await res.json()) as Post[];
  return posts;
}

export default async function Portfolio() {
  const posts = await getData('portfolio');
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Portfolio</h1>
        <ul className="text-center">
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href="/portfolio/[slug]" as={`/portfolio/${post.slug}`}>
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
