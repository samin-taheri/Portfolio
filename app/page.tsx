import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import type { NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8336c8]/80'>

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
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
            <img src="samin.jpeg" alt="" className='filter grayscale hover:grayscale-0 cursor-pointer h-10 w-10 rounded-full object-cover' />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Home;