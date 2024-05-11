import { Montserrat } from "next/font/google";
import { Post } from "./types";
const { BLOG_URL, CONTENT_API_KEY } = process.env;

export async function getPost(slug: string) {
  if (BLOG_URL && CONTENT_API_KEY) {
    try {
      const url = `${BLOG_URL}/ghost/api/content/posts/slug/${slug}/?key=${CONTENT_API_KEY}&fields=title,html,slug`;
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) {
        throw new Error("Unable to retreive from network");
      }
      const data = (await res.json()) as { posts: Post[] };
      const post = data.posts[0];
      return post;
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  } else {
    console.error("Blog URL or Content API Key is missing");
  }
}

export async function getAllPosts() {
  if (BLOG_URL && CONTENT_API_KEY) {
    try {
      const url = `${BLOG_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug`;
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) {
        throw new Error("Unable to retreive from network");
      }
      const data = (await res.json()) as { posts: Post[] };
      const posts = data.posts;
      return posts;
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  } else {
    console.error("Blog URL or Content API Key is missing");
  }
}

export async function getAllPostsByTag(tag: string) {
  if (BLOG_URL && CONTENT_API_KEY) {
    try {
      const url = `${BLOG_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&fields=title,html,slug,feature_image,feature_image_alt&filter=tag:${tag}`;
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) {
        throw new Error("Unable to retreive from network");
      }
      const data = (await res.json()) as { posts: Post[] };
      const posts = data.posts;
      return posts;
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  } else {
    console.error("Blog URL or Content API Key is missing");
  }
}

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
