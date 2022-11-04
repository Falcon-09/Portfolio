import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import {FaAngleUp} from 'react-icons/fa'
import $ from 'jquery'

const ScrollBtn = () => {
  
  useEffect(() => {
    $(window).on('scroll load',function(){
        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active')
        }else{
            document.querySelector('#scroll-top').classList.remove('active')
        }
    })
  }, [])
  

  return (
    <Link href='/'><a id='scroll-top' aria-label='ScrollTop'><FaAngleUp/></a></Link>
  )
}

export default ScrollBtn