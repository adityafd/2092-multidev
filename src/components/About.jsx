import React, { useEffect } from 'react'
import about from '../assets/about.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div>
        <img data-aos='zoom-in' data-aos-delay='200' src={about} alt="" className='lg:w-[1000px] lg:h-[550px]' />
      </div>
      <div data-aos='zoom-in' data-aos-delay='400' className='flex flex-col justify-center items-start gap-4'>
        <h1 className='text-blue-500 text-[50px] font-semibold'>WE ARE</h1>
        <h1 className='text-black font-semibold lg:text-[50px] text-[40px] lg:leading-[70px] leading-[80px]'>The leading tech engineering agency</h1>
        <p className='text-[18px] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste veniam eaque reiciendis.</p>
        <p className='text-black flex justify-center items-center gap-4'><FaChevronCircleRight className='text-blue-500 size-12'></FaChevronCircleRight>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste veniam eaque reiciendis.</p>
        <p className='text-black flex justify-center items-center gap-4'><FaChevronCircleRight className='text-blue-500 size-12'></FaChevronCircleRight>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste veniam eaque reiciendis.</p>
        <p className='text-black flex justify-center items-center gap-4'><FaChevronCircleRight className='text-blue-500 size-12'></FaChevronCircleRight>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste veniam eaque reiciendis.</p>
        <button className='bg-blue-300 px-6 py-4 rounded-full text-[17px] font-semibold hover:bg-black hover:text-white'>Learn More</button>
      </div>
    </section>
  )
}

export default About