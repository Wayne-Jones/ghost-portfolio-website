import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Splide as SplideType} from '@splidejs/splide/dist/types';
import '@splidejs/react-splide/css/core';
import { Post } from '@/helper/types';
import Image from 'next/image';
import Link from 'next/link';

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
                        height: "375px",
                        gap: "8rem",
                        padding: "30%",
                        type: "loop",
                        speed: 500
                    }}
                    className='mt-7 !absolute !left-0 !w-full'
                    onMounted={(splide) => {
                        handleProgressBar(splide);
                        adjustTrackHeight(splide);
                    }}
                    onMove={(splide) => {
                        handleProgressBar(splide);
                    }}
                    onResized={(splide) => {
                        adjustTrackHeight(splide);
                    }}
                >
                    <SplideTrack>
                        {posts.map((post)=>{
                            return (
                                <SplideSlide key={post.slug}>
                                    {post.feature_image && <Link className='focus:[&>img]:border-dark-purple dark:focus:[&>img]:border-white' href={`/portfolio/${post.slug}`}><Image
                                    src={post.feature_image}
                                    alt={post.feature_image_alt}
                                    fill
                                    className='border-2 rounded-md dark:border-light-gray border-dark-gray'
                                    /></Link> }
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>
                    <div className="splide__progress dark:bg-light-gray bg-dark-gray mt-9 max-w-[500px] mx-auto">
                        <div className="splide__progress__bar bg-dark-purple dark:bg-light-purple h-1 transition-all duration-500 ease-linear w-0" />
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

const handleProgressBar = (splide: SplideType) => {
    const bar = splide.root.querySelector<HTMLElement>('.splide__progress__bar');
    const end  = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min( ( splide.index + 1 ) / end, 1 );
    if(bar){
        bar.style.width = String( 100 * rate ) + '%';
    }
}

const adjustTrackHeight = (splide: SplideType) => {
    const splideTrack = splide.root.querySelector<HTMLElement>('.splide__track');
    if(splideTrack){
        splideTrack.style.height = String(splideTrack.offsetHeight * 1.2) + "px";
    }
}

export default Portfolio