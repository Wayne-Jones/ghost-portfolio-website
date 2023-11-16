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
                        width: "100%",
                        height: "315px",
                        gap: "5rem",
                        padding: "30%",
                        drag: false,
                        type: "loop",
                        perPage: 1
                    }}
                    onMounted={(splide) => {
                        const bar = splide.root.querySelector<HTMLElement>( '.splide__progress__bar' );
                        const end  = splide.Components.Controller.getEnd() + 1;
                        const rate = Math.min( ( splide.index + 1 ) / end, 1 );
                        if(bar){
                            bar.style.width = String( 100 * rate ) + '%';
                        }
                    }}
                    onMove={(splide) => {
                        const bar = splide.root.querySelector<HTMLElement>( '.splide__progress__bar' );
                        const end  = splide.Components.Controller.getEnd() + 1;
                        const rate = Math.min( ( splide.index + 1 ) / end, 1 );
                        if(bar){
                            bar.style.width = String( 100 * rate ) + '%';
                        }
                    }}
                >
                    <SplideTrack>
                        {posts.map((post)=>{
                            return (
                                <SplideSlide key={post.slug}>
                                    {post.feature_image && <Image
                                    src={post.feature_image}
                                    alt={post.feature_image_alt}
                                    fill
                                    style={{objectFit: "cover"}}
                                    /> }
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>
                    <div className="splide__progress dark:bg-white bg-dark-gray mt-9">
                        <div className="splide__progress__bar bg-dark-purple dark:bg-light-purple h-1 transition-all duration-300 ease-linear w-0" />
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