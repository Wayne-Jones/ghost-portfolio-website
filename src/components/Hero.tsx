import { HiOutlineArrowRight } from "react-icons/hi2";
import Image from "next/image";
import Button from "./Button";

type Props = {
    /**
     * Text orientation and alignment in hero
     */
    textAlign?: "left" | "right" | "center",
    /**
     * URL string for Inline Image for hero
     */
    inlineImage?: string,
    /**
     * Alt Text for Inline Image for hero
     */
    inlineAlt?: string,
    /**
     * URL string for Background Image for hero
     */
    bgImage?: string,
    /**
     * URL string for Call To Action Button for hero
     */
    cta?: string
}
/**
 * Hero UI Component
 */
const Hero = ({textAlign = "center", inlineImage, inlineAlt, bgImage, cta}: Props) => {
    const align: Record<typeof textAlign, string> = {
        "left": "items-start",
        "center": "items-center",
        "right": "items-end",
    } as const;
    const alignClass = align[textAlign];

    return (
        <section className="min-h-screen dark:bg-light-gray py-10 flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="container">
                <div className="flex justify-center items-center gap-12">
                    <div className={`flex flex-col ${alignClass} justify-center`}>
                        <h1 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight xl:text-6xl">Wayne Jones</h1>
                        <h2 className="mb-6 text-xl md:text-2xl !leading-tight font-bold tracking-tight xl:text-3xl">Experienced Web Developer & Photographer</h2>
                        <p className="text-lg leading-8">
                            Based in New York City
                        </p>
                        {cta && <Button text="Get In Touch" onClick={()=> {window.location.href = cta;}} icon={<HiOutlineArrowRight className="w-6 h-6" />} /> }
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
            </div>
        </section>
    )
}

export default Hero;