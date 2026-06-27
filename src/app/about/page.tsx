import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="max-w-2xl text-center">
        This site showcases my photography and development portfolio. Built with Next.js, Tailwind CSS, and content powered by Ghost CMS, it demonstrates a modern, statically‑generated web experience.
      </p>
    </div>
  );
}
