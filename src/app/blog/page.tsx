import { getAllPostsByTag } from '@/helper/util';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog'
};

export default async function Blog() {
  const posts = await getAllPostsByTag('blog');
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold underline'>Blog</h1>
        <ul className='text-center'>
          {posts &&
            posts.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href='/blog/[slug]' as={`/blog/${post.slug}`}>
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
