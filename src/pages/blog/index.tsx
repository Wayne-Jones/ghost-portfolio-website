
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { getAllPostsByTag } from '../../helper/util'
import { Post } from '../../helper/types'
import Layout from '@/components/Layout'

export const getStaticProps = async () => {
    const posts = await getAllPostsByTag('blog');
    return {
        props: { posts },
        revalidate: 60
    }
}

export default function BlogLanding(props: { posts: Post[] }) {
    const { posts } = props;
    return (
        <Layout>
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold underline">Blog</h1>
                <ul className="text-center">
                    {posts.map((post) => {
                        return <li className={styles.postitem} key={post.slug}>
                            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}