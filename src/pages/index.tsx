import { getAllPostsByTag } from '../helper/util'
import { Post } from '../helper/types'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'

export const getStaticProps = async () => {
  const posts = await getAllPostsByTag('portfolio');
  return {
    props: { posts },
    revalidate: 60
  }
}

export default function Home(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio posts={posts} />
    </Layout>
  )
}
