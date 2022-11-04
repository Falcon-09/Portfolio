import React from 'react'
import Link from 'next/link'
import {FaChevronCircleRight,FaHeart,FaPhone,FaEnvelope,FaMapMarkedAlt,FaLinkedin,FaGithub,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='min-h-[auto] pt-0 bg-[#00012B]'>
        <div className='flex justify-center flex-wrap'>
        <div className='flex-grow flex-shrink basis-[25rem] m-[2.5rem]'>
            <h3 className='text-[2.5rem] text-[#fff] pb-4 font-medium'>Nipun's Portfolio</h3>
            <p className='text-[1.5rem] text-[#ccc] py-[0.7rem] px-0  tracking-wider normal-case'>Thank you for visiting my personal portfolio website. Connect with me over socials. 
                <br /><br /> Keep Rising 🚀
            </p>
        </div>

        <div className='flex-grow flex-shrink basis-[25rem] m-[2.5rem]'>
            <h3 className='text-[2.5rem] text-[#fff] pb-4 font-medium'>quick links</h3>
            <Link href='#'><a className='flex items-center text-[1.5rem] text-[#EEEEEE] py-[0.3rem] px-0
            hover:text-[#ffae00] gap-2 tracking-wider font-medium
            '><FaChevronCircleRight/> home</a></Link>
             <Link href='#'><a className='flex items-center text-[1.5rem] text-[#EEEEEE] py-[0.3rem] px-0
            hover:text-[#ffae00] gap-2 tracking-wider font-medium
            '><FaChevronCircleRight/> about</a></Link>
             <Link href='#'><a className='flex items-center text-[1.5rem] text-[#EEEEEE] py-[0.3rem] px-0
            hover:text-[#ffae00] gap-2 tracking-wider font-medium
            '><FaChevronCircleRight/> skills</a></Link>
             <Link href='#'><a className='flex items-center text-[1.5rem] text-[#EEEEEE] py-[0.3rem] px-0
            hover:text-[#ffae00] gap-2 tracking-wider font-medium
            '><FaChevronCircleRight/> education</a></Link>
             <Link href='#'><a className='flex items-center text-[1.5rem] text-[#EEEEEE] py-[0.3rem] px-0
            hover:text-[#ffae00] gap-2 tracking-wider font-medium
            '><FaChevronCircleRight/> work</a></Link>
             <Link href='#'><a className='flex items-center text-[1.5rem] text-[#EEEEEE] py-[0.3rem] px-0
            hover:text-[#ffae00] gap-2 tracking-wider font-medium
            '><FaChevronCircleRight/> experience</a></Link>

        </div>

        <div className='flex-grow flex-shrink basis-[25rem] m-[2.5rem]'>
            <h3 className='text-[2.5rem] text-[#fff] pb-4 font-medium'>contact info</h3>
            <p className='flex items-center gap-4 text-[1.5rem] text-[#ccc] py-[0.7rem] px-0 tracking-wider'><FaPhone className='text-[#ffae00]'/>+91 997-197-8917</p>
            <p className='flex items-center gap-4 text-[1.5rem] text-[#ccc] py-[0.7rem] px-0 tracking-wider normal-case'><FaEnvelope className='text-[#ffae00]'/>nipunmitra09@gmail.com</p>
            <p className='flex items-center gap-4 text-[1.5rem] text-[#ccc] py-[0.7rem] px-0 tracking-wider'><FaMapMarkedAlt className='text-[#ffae00]'/>Greater Noida, India-201310</p>
            <div className='flex flex-wrap py-4 px-0'>
                <Link href='#'><a className='flex items-center justify-center h-16 w-16 p-4 text-center rounded-[5rem]
                text-[1.7rem] mr-4 transition duration-[0.2s] bg-[#E6E6E6] text-[#02094b]
                border-none hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem]
                hover:border-solid hover:border-[#B4B2B2] hover:text-[#ffae00]
                '><FaLinkedin/></a></Link>
                <Link href='#'><a className='flex items-center justify-center h-16 w-16 p-4 text-center rounded-[5rem]
                text-[1.7rem] mr-4 transition duration-[0.2s] bg-[#E6E6E6] text-[#02094b]
                border-none hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem]
                hover:border-solid hover:border-[#B4B2B2] hover:text-[#ffae00]
                '><FaGithub/></a></Link>
                <Link href='#'><a className='flex items-center justify-center h-16 w-16 p-4 text-center rounded-[5rem]
                text-[1.7rem] mr-4 transition duration-[0.2s] bg-[#E6E6E6] text-[#02094b]
                border-none hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem]
                hover:border-solid hover:border-[#B4B2B2] hover:text-[#ffae00]
                '><FaEnvelope/></a></Link>
                <Link href='#'><a className='flex items-center justify-center h-16 w-16 p-4 text-center rounded-[5rem]
                text-[1.7rem] mr-4 transition duration-[0.2s] bg-[#E6E6E6] text-[#02094b]
                border-none hover:bg-transparent hover:scale-[0.98] hover:border-[0.1rem]
                hover:border-solid hover:border-[#B4B2B2] hover:text-[#ffae00]
                '><FaTwitter/></a></Link>
            </div>
        </div>
        </div>
        <h1 className='flex items-center justify-center pt-4 px-0 pb-0 text-center text-[1.5rem] font-nunito font-medium 
        text-[#fff] border-solid border-x-transparent border-b-transparent border-t-[0.1rem] tracking-wider
        border-t-[#fff3] gap-3
        '>Designed with <FaHeart className='hani text-[#e90606] text-[1.5rem]'/> by <Link href='#'><a className='text-[#ffae00] tracking-wider'>nipun mitra</a></Link></h1>
    </section>
  )
}

export default Footer