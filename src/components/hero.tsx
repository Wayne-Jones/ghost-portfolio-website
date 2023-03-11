type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="min-h-screen dark:bg-gradient-to-r dark:from-light-gray dark:to-dark-gray flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-5 py-24">
                <div className="w-full md:w-1/2">
                    <h2 className="mb-6 text-4xl md:text-5xl !leading-tight font-bold tracking-tight lg:text-6xl xl:text-7xl">Experienced Web Developer & Photographer</h2>
                    <button className="bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-">Get in touch</button>
                    <p className="mt-24 text-lg leading-8">
                        Based in New York City
                    </p>
                </div>
                <div className="w-full md:w-1/2"></div>
            </div>

        </section>
    )
}

export default Hero;