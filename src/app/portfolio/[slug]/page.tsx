import { getAllPostsByTag, getPost } from '@/helper/util';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home'
};

export async function generateStaticParams() {
  const posts = await getAllPostsByTag('portfolio');
  const slugs = (posts ?? []).map((post) => post.slug);
  return slugs.length > 0 ? slugs.map((slug) => ({ slug })) : [{ slug: 'placeholder' }];
}

export default async function PortfolioSlug({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <>
      <p>
        <Link href='/portfolio'>Go Back</Link>
      </p>
      {post && (
        <>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}></div>
        </>
      )}
    </>
  );
}
