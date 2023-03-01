
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { getAllPosts } from '../helper/util'
import { Post } from '../helper/types'

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
      <section className="min-h-screen container flex flex-col lg:flex-row items-center justify-between gap-5 py-12">
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 text-center lg:text-start">
          <h1 className="mb-4">Hi, I&#39;m Wayne Jones</h1>
          <p className="mb-4">I am a web developer and content creator based in New York City</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis incidunt facilis laborum iste consequuntur inventore porro veritatis ipsa placeat? Quos sed aliquam eaque laudantium sapiente explicabo, modi asperiores aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis incidunt facilis laborum iste consequuntur inventore porro veritatis ipsa placeat? Quos sed aliquam eaque laudantium sapiente explicabo, modi asperiores aliquid!</p>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center lg:justify-end">
          <Image src="http://source.unsplash.com/random/500x700" alt="Random Picture" className="object-cover max-h-[300px] lg:max-h-[600px]" width="500" height="700"/>
        </div>
      </section>
      <section className="min-h-screen container flex flex-col">
        <h1 className="text-3xl font-bold underline">Blog</h1>
        <ul className="text-center">
          {posts.map((post) =>{
            return <li className={styles.postitem} key={post.slug}>
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
