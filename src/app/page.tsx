import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      {/* <Hero textAlign='center' cta="http://google.com" />
      <About />
      <Portfolio posts={posts} /> */}
    </>
  );
}
