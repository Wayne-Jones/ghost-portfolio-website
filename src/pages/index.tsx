import { getAllPosts } from '../helper/util'
import { Post } from '../helper/types'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Link from 'next/link'

export const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts },
    revalidate: 10
  }
}

export default function Home(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <section className="min-h-screen container flex flex-col">
        <h1 className="text-3xl font-bold underline">Blog</h1>
        <ul className="text-center">
          {posts.map((post) =>{
            return <li key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          })}
        </ul>
      </section>
    </>
  )
}
