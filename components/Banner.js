import React from 'react'
import ParticlesJs from './Particles'
import Typed from 'react-typed';
import Link from 'next/link';
import {FaArrowCircleDown,FaLinkedin,FaGithub,FaTwitter,FaTelegramPlane} from 'react-icons/fa'
import Image from 'next/image';


const Banner = () => {
  return (
    <section className='min-h-screen py-8 px-[9%] relative flex flex-wrap gap-6 
    items-center before:absolute before:top-0 before:left-0 before:h-full before:w-full 
    '>
        <div className='absolute top-0 left-0 h-full w-full -z-10'><ParticlesJs/></div>
        <div className='pt-4 z-10 flex-grow-[1] flex-shrink-[1] basis-[40rem] mt-4'>
            <h2 className='text-[5rem] md:text-[4rem] font-extrabold text-[#002057]'>Hi There,<br /> I'm Nipun <span className='text-[5rem] md:text-[4rem] font-extrabold text-[#ff7b00]'>Mitra</span></h2>
            <p className='text-[2.5rem] text-[#000] font-semibold py-4 md:text-[1.85rem]'>I am into <span className='text-[2.5rem] text-[#940808] font-semibold py-4 md:text-[1.85rem]'><Typed strings={["frontend development", "backend development", "web designing", "android development", "web development"]} typeSpeed={50} backSpeed={50} backDelay={500} loop/></span></p>
            <Link href='#about' scroll={false}><a className='flex justify-center items-center mt-4 absolute leading-[0] 
            py-[1.6rem] px-12 rounded-[4em] transition duration-[0.5s] text-white 
            bg-[#2506ad] shadow-lg shadow-[#3044f799] hover:bg-[#1a047e] group
            md:my-16 
            '><span className='font-[625] text-[1.7rem] tracking-wide md:text-[1.6rem]'>About Me</span><FaArrowCircleDown className='mt-1 ml-[0.57rem] text-[1.7rem] transition duration-[0.3s] group-hover:translate-x-[6px]'/></a></Link>
            <div className='relative mt-[9rem] md:mt-[12rem]'>
              <ul className='pl-0 mb-0 no-underline'>
                <li className='inline-block mb-[14px]'><Link href='https://www.linkedin.com/in/nipun-mitra-ab01b120b/'><a className='text-[2rem] flex items-center justify-center leading-[44px] text-[#00d9ff] 
                bg-[#09011b] w-[44px] h-[44px] text-center mr-[8px] rounded-full transition duration-[0.2s] ease-out hover:text-white
                hover:bg-[#007bb6]
                '><FaLinkedin /></a></Link></li>
                 <li className='inline-block mb-[14px]'><Link href='https://github.com/Falcon-09'><a className='text-[2rem] flex items-center justify-center leading-[44px] text-[#00d9ff] 
                bg-[#09011b] w-[44px] h-[44px] text-center mr-[8px] rounded-full transition duration-[0.2s] ease-out hover:text-white
                hover:bg-[#0e0e0e]
                '><FaGithub /></a></Link></li>
                 <li className='inline-block mb-[14px]'><Link href='#'><a className='text-[2rem] flex items-center justify-center leading-[44px] text-[#00d9ff] 
                bg-[#09011b] w-[44px] h-[44px] text-center mr-[8px] rounded-full transition duration-[0.2s] ease-out hover:text-white
                hover:bg-[#00aced]
                '><FaTwitter /></a></Link></li>
                 <li className='inline-block mb-[14px]'><Link href='#'><a className='text-[2rem] flex items-center justify-center leading-[44px] text-[#00d9ff] 
                bg-[#09011b] w-[44px] h-[44px] text-center mr-[8px] rounded-full transition duration-[0.2s] ease-out hover:text-white
                hover:bg-[#0685da]
                '><FaTelegramPlane /></a></Link></li>
              </ul>
            </div>
        </div>
        <div className='flex-grow flex-shrink basis-[40rem] z-10'>
          <img src='../hero.png' alt='profile' className='w-[70%] rounded-[50%] ml-[6rem] shadow-sm cursor-pointer md:-mt-20'/>
        </div>
    </section>
  )
}

export default Banner
