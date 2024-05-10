import { Metadata } from "next";
import { Post } from "@/helper/types";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
const { LOCAL_URL } = process.env;

export const metadata: Metadata = {
  title: "Home",
};

async function getData() {
  const res = await fetch(`${LOCAL_URL}/api/post`, { next: { revalidate: 10 } });
  const posts: Post[] = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getData();
  return (
    <>
      <h1>Home Page</h1>
      {/* <Hero textAlign='center' cta="http://google.com" />
      <About />
      <Portfolio posts={posts} /> */}
    </>
  );
}
