import React from 'react'
import {FaLaptopCode} from 'react-icons/fa'
import data from '../data/Skills.json'

const Skills = () => {
  return (
    <section className='skills'>
        <div className='flex justify-center items-center text-[3.5rem] md:text-[3.2rem] font-poppins font-extrabold'>
        <FaLaptopCode className='text-[#fff] text-[4.1rem] mr-3'/> <h2 className='text-[#fff]'> Skills & <span className='text-[#FFE600]'>Abilities</span></h2>
        </div>
        
        <div className='bg-[#00001666] text-[#fff] rounded-2xl p-8 w-[90%] m-auto mt-8 md:p-0 md:m-0 md:mt-[5px] md:w-full'>
            <div className='grid grid-cols-6 flex-wrap gap-[1.8rem] md:grid-cols-2 md:m-4 md:py-8 md:px-[0.2rem]'>
                {
                    data.map((skill) => (
                        <div key={skill.icon} className='mb-[15px] p-[10px] rounded-2xl shadow-md bg-[#000016e6]
                        transition duration-[0.2s] hover:shadow-md hover:shadow-[#000244cc] 
                        hover:bg-[#000000e6]
                        '>
                            <div className='flex flex-col items-center gap-4 mt-4'>
                                <img src={skill.icon} alt="" />
                                <span className='text-[2rem] font-[530] font-poppins ml-2'>{skill.name}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills