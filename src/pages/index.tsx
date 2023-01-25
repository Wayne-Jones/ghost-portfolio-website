
import Link from 'next/link'
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
      <div className="w-full flex flex-col justify-center items-center">
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
      </div>
    </>
  )
}
