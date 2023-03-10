type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="min-h-screen bg-gradient-to-r from-light-gray to-dark-gray flex items-center">
            <div className="container flex flex-col lg:flex-row items-center justify-between gap-5 py-20">
                <div className="flex flex-row md:flex-row">
                    <div className="">
                        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Experienced Web Developer and Photographer</h2>
                        <button className="bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-">Get in touch</button>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Based in New York City
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero;