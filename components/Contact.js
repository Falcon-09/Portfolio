import React, { useRef } from 'react'
import {FaHeadset,FaPaperPlane,FaUser,FaEnvelope,FaPhoneAlt,FaCommentDots} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css'
import { toast,ToastContainer } from 'react-toastify'

const Contact = () => {

  const form = useRef()

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    dragabble: true,
    theme: 'dark'
  }

  const SendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_mfjwag9', 'template_1x16yuc', form.current, 'qc9ijop_N6GBR2v9A')
      .then((result) => {
          toast.success("Email sent!",toastOptions)
          console.log(result.text);
      }, (error) => {
          toast.error("Error Occurred",toastOptions)
          console.log(error.text);
      });
  }

  return (
    <>
    <section className='bg-[#e5ecfb] min-h-[60vh] md:min-h-[70vh]'>
  
  <h2 className='flex justify-center items-center text-[3.5rem] text-[rgb(32,32,32)] 
  font-extrabold text-center mr-14
  '><FaHeadset className='mr-3'/> Get in <span className='text-[rgb(115,3,167)] ml-3'>Touch</span></h2>

  <div className='max-w-[1050px] w-full bg-[#fff] rounded-3xl my-8 mx-20 shadow-md 
  md:mx-0 md:mt-12 md:mb-8
  '>
    <div className='flex items-center justify-between py-10 px-8 md:py-[18px] md:px-[12px]'>
      <div className='max-w-[60%] ml-16 md:hidden'>
        <img draggable="false" src="/contact.png" alt="" className='w-full h-[40rem] relative'/>
      </div>
    <form ref={form} id="contact-form" className='w-[45%] mr-14 md:w-full md:mr-8' onSubmit={SendEmail}>
      
      <div className='flex flex-col justify-center'>
        <div className='h-[50px] flex relative m-4 w-full'>
          <input type="text" name="from_name" placeholder="Name" required className='w-full 
          h-full py-0 pr-[16px] pl-[48px] text-[16px] font-poppins rounded-[5px] 
          border-solid border-[1px] border-[rgb(51,51,51)] bg-[#e5ecfb] outline-none 
          placeholder:text-[rgb(51,51,51)] focus:pl-[47px] focus:border-solid focus:border-[2px]
          focus:border-[rgb(115,3,167)] 
          '/>
           <FaUser className='absolute top-[30%] left-[18px] text-[rgb(51,51,51)] text-[17px] 
           pointer-events-none 
           '/>
        </div>
        <div className='h-[50px] flex relative m-4 w-full'>
          <input type="text" name="email" placeholder="Email" required className='w-full 
          h-full py-0 pr-[16px] pl-[48px] text-[16px] font-poppins rounded-[5px] 
          border-solid border-[1px] border-[rgb(51,51,51)] bg-[#e5ecfb] outline-none 
          placeholder:text-[rgb(51,51,51)] focus:pl-[47px] focus:border-solid focus:border-[2px]
          focus:border-[rgb(115,3,167)] normal-case
          '/>
          <FaEnvelope className='absolute top-[30%] left-[18px] text-[rgb(51,51,51)] text-[17px] 
           pointer-events-none 
           '/>
        </div>
        <div className='h-[50px] flex relative m-4 w-full'>
          <input type="text" name="phone" placeholder="Phone" className='w-full 
          h-full py-0 pr-[16px] pl-[48px] text-[16px] font-poppins rounded-[5px] 
          border-solid border-[1px] border-[rgb(51,51,51)] bg-[#e5ecfb] outline-none 
          placeholder:text-[rgb(51,51,51)] focus:pl-[47px] focus:border-solid focus:border-[2px]
          focus:border-[rgb(115,3,167)]
          '/>
          <FaPhoneAlt className='absolute top-[30%] left-[18px] text-[rgb(51,51,51)] text-[17px] 
           pointer-events-none 
           '/>
        </div>
        <div className='relative m-4 w-full'>
        <textarea placeholder="Message" name="message" required className='min-h-[130px] max-h-[230px] 
        max-w-full min-w-full pt-[12px] pr-[20px] pb-0 pl-[48px] w-full h-full outline-none 
        text-[16px] font-poppins rounded-[5px] border-[1px] border-solid border-[rgb(51,51,51)] 
        bg-[#e5ecfb] placeholder:text-[rgb(51,51,51)] focus:pl-[47px] focus:border-solid focus:border-[2px]
        focus:border-[rgb(115,3,167)] overflow-hidden normal-case
        '/>
        <FaCommentDots className='absolute top-[15px] left-[15px] text-[rgb(51,51,51)] text-[20px] 
        pointer-events-none 
        '/>
        </div>
        </div>
      <div className='flex float-right flex-row-reverse'>
        <button type="submit" className='flex items-center justify-center text-[#fff] border-none outline-none text-[1.8rem] 
        cursor-pointer rounded-[5px] py-[13px] px-[25px] bg-[#2506ad] shadow-lg shadow-[rgba(48,68,247,0.6)] transition : ;
        duration-[0.3s] ease-in-out font-nunito tracking-wider gap-2 hover:bg-[#421cecf5] group
        '>Submit <FaPaperPlane className='text-3xl pb-1 group-hover:translate-x-2'/></button>
      </div>
    </form>
  </div>
  </div>
</section>
<ToastContainer />
</>
  )
}

export default Contact