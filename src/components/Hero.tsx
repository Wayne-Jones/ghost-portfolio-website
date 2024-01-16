import { HiOutlineArrowRight } from "react-icons/hi2";
import Image from "next/image";
import Aside from "./aside";
import Button from "./Button";

type Props = {
    textAlign: "left" | "right" | "center",
    inlineImage?: string,
    inlineAlt?: string,
    bgImage?: string,
    cta?: string

}

const Hero = (props: Props) => {
    const align = props.textAlign;
    const inlineImage = props.inlineImage;
    const inlineAlt = props.inlineAlt;
    const bgImage = props.bgImage;
    const cta = props.cta;
    return (
        <section className="relative min-h-screen dark:bg-light-gray py-10">
            {align === 'center' &&
                <div className="container flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center flex-nowrap">
                        <h1 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight xl:text-6xl">Wayne Jones</h1>
                        <h2 className="mb-6 text-xl md:text-2xl !leading-tight font-bold tracking-tight xl:text-3xl text-center">Experienced Web Developer & Photographer</h2>
                        <p className="text-lg leading-8">
                            Based in New York City
                        </p>
                        {cta && <Button text="Get In Touch" onClick={()=> {window.location.href = cta;}}icon={<HiOutlineArrowRight className="w-6 h-6" />} /> }
                    </div>
                    {inlineImage && 
                        <div className="max-w-lg">
                            <Image
                                src={inlineImage}
                                alt={inlineAlt ?? ""}
                                width={500}
                                height={200}
                                style={{ objectFit: "cover", width: "100%", height: "auto" }} />
                        </div>
                    }
                </div>
            }
            {align === 'left' &&
                <div className="container flex">
                    <div className="flex flex-col items-center justify-center flex-nowrap">
                        <h1 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight xl:text-6xl">Wayne Jones</h1>
                        <h2 className="mb-6 text-xl md:text-2xl !leading-tight font-bold tracking-tight xl:text-3xl text-center">Experienced Web Developer & Photographer</h2>
                        <p className="mt-24 text-lg leading-8">
                            Based in New York City
                        </p>
                        {cta && <Button text="Get In Touch" icon={<HiOutlineArrowRight className="w-6 h-6" />} />}
                    </div>
                    {inlineImage && <Image
                        src={inlineImage}
                        alt={inlineAlt ?? ""}
                        fill
                        style={{ objectFit: "cover" }} />}
                </div>
            }
            {align === 'right' &&
                <div className="container flex">
                    {inlineImage && <Image
                        src={inlineImage}
                        alt={inlineAlt ?? ""}
                        fill
                        style={{ objectFit: "cover" }} />}
                    <div className="flex flex-col items-center justify-center flex-nowrap">
                        <h1 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight xl:text-6xl">Wayne Jones</h1>
                        <h2 className="mb-6 text-xl md:text-2xl !leading-tight font-bold tracking-tight xl:text-3xl text-center">Experienced Web Developer & Photographer</h2>
                        <p className="mt-24 text-lg leading-8">
                            Based in New York City
                        </p>
                        {cta && <Button text="Get In Touch" icon={<HiOutlineArrowRight className="w-6 h-6" />} />}
                    </div>
                </div>
            }
        </section>
    )
}

export default Hero;