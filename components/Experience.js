import React,{useEffect} from 'react'
import {FaBriefcase} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
  useEffect(() =>{
    Aos.init({duration: 1500})
  },[])
  return (
    <section className='bg-[#FFFFFF] experience' id='experience'>
    <h2 className='flex items-center justify-center gap-3 text-[3.5rem] md:text-[3.2rem] text-[rgb(32,32,32)] font-extrabold text-center'><FaBriefcase /> Experience</h2>

    <div data-aos='fade-down' className='timeline'>

    <div className="container right">
      <div className="content">
        <div className="tag">
          <h2 className='text-[2rem] font-bold'>Self Employed</h2>
        </div>
        <div className="desc">
            <h3 className='text-[1.5rem] font-semibold'>Full Stack Developer</h3>
            <p className='text-[1.2rem]'>Jan 2022 - present</p>
        </div>
      </div>
    </div>

    <div className="container left">
      <div className="content">
        <div className="tag">
          <h2 className='text-[2rem] font-bold'>Tech Mahindra</h2>
        </div>
        <div className="desc">
            <h3 className='text-[1.5rem] font-semibold'>Software Development Intern</h3>
            <p className='text-[1.2rem]'>Jun 2021 - Aug 2021</p>
        </div>
      </div>
    </div>

    <div className="container right">
      <div className="content">
        <div className="tag">
          <h2 className='text-[2rem] font-bold'>Tech Coordinator</h2>
        </div>
        <div className="desc">
            <h3 className='text-[1.5rem] font-semibold'>Knuth Programming Hub</h3>
            <p className='text-[1.2rem]'>Aug 2020 - Aug 2021</p>
        </div>
      </div>
    </div>

    <div className="container left">
      <div className="content">
        <div className="tag">
          <h2 className='text-[2rem] font-bold'>Jaypee Institute Of Information Technology</h2>
        </div>
        <div className="desc">
            <h3 className='text-[1.5rem] font-semibold'>B.tech</h3>
            <p className='text-[1.2rem]'>Jul 2018 - Aug 2022</p>
        </div>
      </div>
    </div>

        </div>
    </section>
  )
}

export default Experience