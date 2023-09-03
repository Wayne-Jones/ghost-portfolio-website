import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Post } from '@/helper/types';
import Image from 'next/image';

const Portfolio = (props: {posts: Post[]}) => {
    const { posts } = props;
    return (
        <section className="dark:bg-dark-gray relative my-4 py-4">
            <div className="container">
                <div className="w-full">
                    <h2 className="text-dark-purple dark:text-light-purple text-3xl font-semibold uppercase" id="portfolio">Portfolio</h2>
                </div>
                <Splide 
                    hasTrack={ false }
                    aria-labelledby="portfolio"
                    options={{
                        heightRatio: 0.5,
                        width: 800,
                        gap: "1em",
                        padding: "1rem",
                        drag: false,
                        type: "loop"
                    }}
                >
                    <SplideTrack>
                        {posts.map((post)=>{
                            return (
                                <SplideSlide key={post.slug}>
                                    <Image
                                    src={post.feature_image}
                                    alt={post.feature_image_alt}
                                    fill
                                    objectFit='cover'
                                    layout='fill'/>
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>
                    <div className="splide__progress">
                        <div className="splide__progress__bar" />
                    </div>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">Prev</button>
                        <button className="splide__arrow splide__arrow--next">Next</button>
                    </div>
                </Splide>
            </div>
        </section>
    )
}

export default Portfolio