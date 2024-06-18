import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <>
      <Hero textAlign='left'/>
      {/* <Hero textAlign='center' cta="http://google.com" />
      <About />
      <Portfolio posts={posts} /> */}
    </>
  );
}
