import { HiOutlineArrowRight } from "react-icons/hi2";
import Image from "next/image";
import Aside from "./aside";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="relative min-h-screen dark:bg-gradient-to-r dark:from-light-gray dark:to-dark-gray flex items-center">
            {/* <div className="absolute right-0 h-full hidden lg:block w-3/5 overflow-hidden opacity-50" style={{ clipPath: "polygon(150px 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
                <Image
                    src="https://picsum.photos/1000"
                    alt="Random Image"
                    fill
                    style={{ objectFit: "cover" }} />

            </div> */}
            <div className="container flex items-center justify-center">
                <div className="w-[600px] flex flex-col items-center justify-center flex-nowrap">
                    <h1 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight xl:text-6xl">Wayne Jones</h1>
                    <h2 className="mb-6 text-xl md:text-2xl !leading-tight font-bold tracking-tight xl:text-3xl text-center">Experienced Web Developer & Photographer</h2>
                    <Button text="Get In Touch" icon={<HiOutlineArrowRight className="w-6 h-6" />} />
                    <p className="mt-24 text-lg leading-8">
                        Based in New York City
                    </p>
                </div>
                {/* <div className="w-full lg:w-1/2">
                    <Aside text="My background in content creation and web development goes hand in hand when it comes to creating 
                    wonderful designs that are responsive and accessible."></Aside>
                </div> */}
            </div>

        </section>
    )
}

export default Hero;