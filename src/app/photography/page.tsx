import { getAllPostsByTag } from '@/helper/util';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Photography'
};

export default async function PhotographyPage() {
  // Fetch posts tagged with "photography" from Ghost CMS.
  // If none are returned, the page will fall back to local images.
  const posts = await getAllPostsByTag('photography');

  // Helper to render local placeholder images if Ghost provides none.
  const localImages = [
    '/photography/placeholder1.jpg',
    '/photography/placeholder2.jpg',
    '/photography/placeholder3.jpg'
  ];

  const hasGhostImages = posts && posts.length > 0;

  return (
    <div className="w-full flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Photography</h1>

      {hasGhostImages ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
          {posts.map((post) => (
            <li key={post.slug} className="border rounded p-2">
              <Link href={`/photography/${post.slug}`}> {/* placeholder route, could be enhanced */}
                <img
                  src={post.feature_image ?? ''}
                  alt={post.title ?? 'Photo'}
                  className="w-full h-48 object-cover mb-2"
                />
                <p className="text-center font-medium">{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
          {localImages.map((src, idx) => (
            <div key={idx} className="border rounded p-2">
              <img src={src} alt={`Placeholder ${idx + 1}`} className="w-full h-48 object-cover mb-2" />
              <p className="text-center font-medium">Placeholder Image {idx + 1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}
