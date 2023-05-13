import React, { useEffect } from "react";
import Image from "next/image"
import Link from 'next/link'
import {FaChevronRight,FaUserAlt} from 'react-icons/fa'
import 'aos/dist/aos.css'
import Aos from "aos";


const About = () => {

useEffect(() =>{
Aos.init({duration: 2000})
},[])

return (
<section className="bg-[#FFFFFF]" id="about">
    <div className="flex justify-center items-center">
        <FaUserAlt className="text-[3.5rem] md:text-[3.2rem] mr-3" />
        <h2 className="text-[3.5rem] md:text-[3.2rem] text-[#202020] font-extrabold text-center">About <span
                className="text-[#7303A7] md:text-[3.2rem]">Me</span></h2>
    </div>
    <div className="flex flex-row gap-8 flex-wrap p-16 md:p-2 md:mb-[7rem]">

        <div className="text-center flex-grow flex-shrink basis-[35rem] md:mt-8">
            <img src="/About1.gif" alt="" className="m-16 w-[30rem] h-auto rounded-[5%]
        shadow-sm hover:mix-blend-luminosity mix-blend-normal transition duration-[0.3s] cursor-pointer
        md:my-0 md:mx-auto md:w-[80%] md:mix-blend-normal
        " />
        </div>
        <div data-aos='fade-down' className="flex-grow flex-shrink basis-[45rem] p-11 md:p-4">
            <h3 className="text-[rgb(27, 27, 27)] text-[2.5rem] font-bold">I'm Nipun</h3>
            <span className="text-[1.4rem] text-[#020133] font-semibold mt-4">Full Stack Developer</span>

            <p className="text-[1.5rem] mt-6 font-medium font-nunito normal-case">Are you looking for a full stack
                developer who can take your applications to the next level? Look no further! With my expertise in both
                front-end and back-end development, I bring a unique blend of technical expertise and creative
                problem-solving to every project. I'm passionate about delivering high-performance, lightning-fast
                solutions that leave a lasting impression on users. From optimizing database queries and implementing
                caching strategies to building responsive, user-friendly interfaces, I'm committed to creating seamless,
                intuitive experiences that empower businesses and users alike. And with a relentless focus on
                performance and efficiency, I'm always exploring new ways to optimize my code and improve application
                speed. So if you're looking for a full stack developer who can deliver elegant, efficient solutions that
                exceed expectations, choose me for your next project!</p>

            <div className="mt-6 text-[1.5rem] flex flex-wrap gap-6 font-nunito font-[520] md:gap-0">
                <div>
                    <p className="normal-case "><span className="text-[#011aff]"> age: </span> 23</p>
                    <p className="normal-case mt-4 md:mt-4"><span className="text-[#011aff]"> phone : </span> +91
                        997-197-8917</p>
                </div>
                <div>
                    <p className="normal-case md:mt-4 md:ml-0 ml-4"><span className="text-[#011aff]"> email : </span>
                        nipunmitra09@gmail.com</p>
                    <p className="normal-case m-4 md:ml-0"><span className="text-[#011aff]"> place : </span> Greater
                        Noida, India - 201310</p>
                </div>
            </div>

            <div className="mt-24">
                <Link href=''>
                <a className="flex items-center justify-center py-[1.7rem] px-12 rounded-lg transition duration-[0.3s] text-[#fff] bg-[#2506ad]
            shadow-[#3044f799] shadow-lg font-nunito w-[150px] h-[45px] hover:bg-[#1a047e] group"><span
                        className="font-medium text-[1.7rem] tracking-wider font-nunito">Resume</span>
                    <FaChevronRight className="text-[1.3rem] ml-1 group-hover:translate-x-[5.5px]" />
                </a>
                </Link>
            </div>

        </div>
    </div>
</section>
);
};

export default About;
