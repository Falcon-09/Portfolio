import React from 'react'
import {FaLaptopCode} from 'react-icons/fa'
import data from '../data/Projects.json'
import {FaEye,FaCode} from 'react-icons/fa'
import Link from 'next/link'

const Project = () => {
  return (
    <section className='projects' id='projects'>
        <h2 className='flex items-center justify-center gap-3 text-[#fff] p-4 text-[3.5rem] md:text-[3.2rem] font-extrabold text-center'><FaLaptopCode className='text-[4.5rem] md:text-[4.1rem]' /> 
        Projects <span className='text-[rgb(255,230,0)]'>Made</span></h2>
        <div className='flex flex-wrap gap-6 m-8'>  
        {
            data.map((project) => (
            <div key={project.image} className='flex-grow flex-shrink basis-[30rem] rounded-lg shadow-lg shadow-[rgba(0,0,0,0.1)] overflow-hidden
            relative h-[30rem] group
            '>
            <img draggable="false" src={`/${project.image}.PNG`} alt="project" className='h-full w-full object-cover' />
            <div className='h-full w-full absolute top-[85%] left-0 bg-[rgba(255,255,255,0.9)] flex flex-col group-hover:top-[25%]'>
                <div className='flex flex-row justify-between items-center h-[4.5rem] w-full pl-4 bg-[#ffd900]'>
                <h3 className='text-[2rem] font-bold tracking-normal'>{project.name}</h3>
                </div>
                <div className='m-8 flex flex-col justify-center'>
                <p className='text-[1.5rem] font-normal'>{project.desc}</p>
                <div className='flex justify-between w-full mt-8'>
                    <Link href={`${project.links.view}`}><a target="_blank" className='leading-[0] flex items-center gap-[0.5rem] py-6 px-10 rounded-lg text-[1.5rem]
                    text-[#fff] bg-[rgb(12,12,12)] mr-8 hover:bg-[#310ae0f5]
                    '><FaEye className='text-[1.9rem]'/> View</a></Link>
                    <Link href={`${project.links.code}`}><a target="_blank" className='leading-[0] flex items-center gap-[0.5rem] py-6 px-10 rounded-lg text-[1.5rem]
                    text-[#fff] bg-[rgb(12,12,12)] mr-8 hover:bg-[#310ae0f5]
                    '>Code <FaCode className='text-[2rem]'/></a></Link>
                </div>
                </div>
            </div>
            </div>
            ))
        }
        </div>
    </section>
  )
}

export default Project