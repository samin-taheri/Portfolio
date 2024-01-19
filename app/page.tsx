import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>

      {/* Header */}
      <Header />
      {/* Hero Banner */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}

    </div>
  )
}
export default Home;