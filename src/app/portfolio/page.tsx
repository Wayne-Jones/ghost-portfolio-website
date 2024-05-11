import { getAllPostsByTag } from '@/helper/util';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio'
};

export default async function Portfolio() {
  const posts = await getAllPostsByTag('portfolio');

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold underline'>Portfolio</h1>
        <ul className='text-center'>
          {posts &&
            posts.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href='/portfolio/[slug]' as={`/portfolio/${post.slug}`}>
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
