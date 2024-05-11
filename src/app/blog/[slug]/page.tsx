import { getAllPostsByTag, getPost } from "@/helper/util";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export async function generateStaticParams() {
  const posts = await getAllPostsByTag("blog");
  return posts?.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogSlug({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return (
    <>
      <p>
        <Link href="/blog">Go Back</Link>
      </p>
      {post && (
        <>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </>
      )}
    </>
  );
}

export const dynamicParams = false;
