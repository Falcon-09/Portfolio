import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaNodeJs,FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {
  // <ImCross className='h-8 w-8'/>
  const[menuOpen,setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
    pt-[1.7rem] pb-[1.7rem] pr-[10%] pl-[10%] h-[6.5rem] bg-white shadow-sm  
    '>
    <Link href='/'><a className='flex text-3xl font-extrabold no-underline text-[#0e2431] hover:text-[#fc8c05]'><FaNodeJs className='text-4xl mr-2'/>Nipun</a></Link>
    <div className='text-2xl font-bold cursor-pointer text-[rgb(24, 2, 63)] hidden md:block'><Hamburger toggled={menuOpen} toggle={setMenuOpen}/></div>
    {/* Navbar starts */}
    <nav className={`md:fixed md:top-[6.5rem] ${menuOpen?'md:right-0':'md:-right-full'} md:w-[75%] 
    md:h-[100%] md:text-left md:items-start md:bg-[#0e0f31]`}>
      <ul className='no-underline flex justify-center items-center
       md:flex md:flex-col md:p-4'>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem]
         font-bold tracking-wider transition duration-[0.2s] 
          border-x-0 border-t-0
          text-[#011aff] py-2 border-b-[0.2rem] border-solid
          md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
          md:rounded-lg md:border-b-[0.5rem] md:border-solid md:border-[#011aff]
         '>Home</a></Link></li>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem] 
        text-[#0e2431] font-bold tracking-wider transition duration-[0.2s] 
        border-x-0 border-t-0
        hover:text-[#011aff] hover:py-2 hover:border-b-[0.2rem] hover:border-solid
        md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
        md:hover:text-white md:hover:rounded-lg md:hover:border-b-[0.5rem] md:hover:border-solid md:hover:border-[#011aff]
        '>About</a></Link></li>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem]
        text-[#0e2431] font-bold tracking-wider transition duration-[0.2s]
        border-x-0 border-t-0
        hover:text-[#011aff] hover:py-2 hover:border-b-[0.2rem] hover:border-solid
        md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
        md:hover:text-white md:hover:rounded-lg md:hover:border-b-[0.5rem] md:hover:border-solid md:hover:border-[#011aff]
        '>Skills</a></Link></li>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem] 
        text-[#0e2431] font-bold tracking-wider transition duration-[0.2s] 
        border-x-0 border-t-0
        hover:text-[#011aff] hover:py-2 hover:border-b-[0.2rem] hover:border-solid
        md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
        md:hover:text-white md:hover:rounded-lg md:hover:border-b-[0.5rem] md:hover:border-solid md:hover:border-[#011aff]
        '>Education</a></Link></li>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem]
        text-[#0e2431] font-bold tracking-wider transition duration-[0.2s] 
        border-x-0 border-t-0
        hover:text-[#011aff] hover:py-2 hover:border-b-[0.2rem] hover:border-solid
        md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
        md:hover:text-white md:hover:rounded-lg md:hover:border-b-[0.5rem] md:hover:border-solid md:hover:border-[#011aff]
        '>Work</a></Link></li>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem]
        text-[#0e2431] font-bold tracking-wider transition duration-[0.2s] 
        border-x-0 border-t-0
        hover:text-[#011aff] hover:py-2 hover:border-b-[0.2rem] hover:border-solid
        md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
        md:hover:text-white md:hover:rounded-lg md:hover:border-b-[0.5rem] md:hover:border-solid md:hover:border-[#011aff]
        '>Experience</a></Link></li>
        <li className='ml-10 md:text-center md:w-[26rem] md:my-4 md:rounded-lg'><Link href='#'><a className='no-underline text-[1.57rem]
        text-[#0e2431] font-bold tracking-wider transition duration-[0.2s] 
        border-x-0 border-t-0
        hover:text-[#011aff] hover:py-2 hover:border-b-[0.2rem] hover:border-solid
        md:block md:p-4 md:text-left md:text-white md:text-[2rem] 
        md:hover:text-white md:hover:rounded-lg md:hover:border-b-[0.5rem] md:hover:border-solid md:hover:border-[#011aff]
        '>Contact</a></Link></li>
      </ul>
    </nav>
    {/* Nabar Ends */}
    </header>
  )
}

export default Header