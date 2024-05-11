import { Post } from "@/helper/types";
import { Metadata } from "next";
import Link from "next/link";
const { LOCAL_URL } = process.env;

export const metadata: Metadata = {
  title: "Home",
};

async function getData(slug: string) {
  const res = await fetch(`${LOCAL_URL}/api/post/slug/${slug}`, {
    next: { revalidate: 60 },
  });
  const post = (await res.json()) as Post;
  return post;
}

export async function generateStaticParams() {
  const res = await fetch(`${LOCAL_URL}/api/post/tag/blog`, {
    next: { revalidate: 60 },
  });
  const posts = (await res.json()) as Post[];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogSlug({ params }: { params: { slug: string } }) {
  const post = await getData(params.slug);
  return (
    <>
      <p>
        <Link href="/blog">Go Back</Link>
      </p>
      <h1>{post.title}</h1>
      {post.html && <div dangerouslySetInnerHTML={{ __html: post.html }}></div>}
    </>
  );
}

export const dynamicParams = false;
