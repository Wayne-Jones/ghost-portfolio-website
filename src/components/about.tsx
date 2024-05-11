import Aside from './aside';

const About = () => {
  return (
    <section className='dark:bg-dark-gray relative my-12 py-24'>
      <div className='container absolute -top-36 left-0 right-0'>
        <div className='border border-light-gray rounded-md bg-white dark:bg-dark-gray px-16 py-10 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-dark-purple dark:text-light-purple text-3xl font-semibold uppercase'>
              About Me
            </h2>
            <p className='text-4xl md:text-5xl lg:text-6xl font-bold uppercase'>Wayne Jones</p>
          </div>
          <Aside
            className='text-xl w-full md:w-1/2'
            text="I'm a photographer who specializes in event photography. When I'm not out shooting, I'm coding websites, playing video games and traveling the world"
          ></Aside>
        </div>
      </div>
    </section>
  );
};

export default About;
