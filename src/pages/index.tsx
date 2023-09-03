import { getAllPostsByTag } from '../helper/util'
import { Post } from '../helper/types'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'

export const getStaticProps = async () => {
  const posts = await getAllPostsByTag('portfolio');
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
      <Portfolio posts={posts}/>
    </>
  )
}
