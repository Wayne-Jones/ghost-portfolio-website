import { HiOutlineArrowRight } from "react-icons/hi2";
import Aside from "./aside";
import Button from "./button";

const Hero = () => {
    return (
        <section className="min-h-screen dark:bg-gradient-to-r dark:from-light-gray dark:to-dark-gray flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-5 py-24 my-12">
                <div className="w-full md:w-1/2">
                    <h2 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight lg:text-6xl xl:text-7xl">Experienced Web Developer & Photographer</h2>
                    <Button text="Get In Touch" icon={<HiOutlineArrowRight className="w-6 h-6" />}/>
                    <p className="mt-24 text-lg leading-8">
                        Based in New York City
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <Aside text="My background in content creation and web development goes hand in hand when it comes to creating 
                    wonderful designs that are responsive and accessible."></Aside>
                </div>
            </div>

        </section>
    )
}

export default Hero;