import React, { useEffect } from 'react'
import herobanner from '../assets/herobanner.png'
import clients from '../assets/clients.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <section id='home' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos='zoom-in' data-aos-delay='' className='text-blue-500 font-semibold lg:text-[90px] text-[65px] lg:leading-[75px] leading-[60px]'>MultiDev</h1>
        <h1 data-aos='zoom-in' data-aos-delay='' className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[75px] leading-[60px]'>Enterprise</h1>
        <p data-aos='zoom-in' data-aos-delay='50' className='text-[20px] text-slate-700'>We created exceptional, state-of-the-art, and easy-to-use applications</p>
        <button data-aos='zoom-in' data-aos-delay='100' className='bg-blue-300 px-6 py-4 rounded-full text-[17px] font-semibold hover:bg-black hover:text-white'>Get Started</button>
        <div data-aos='zoom-in' data-aos-delay='100' className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10'>
          <img src={clients} alt="" />
          <p className='text-[20px] font-bold'>Trusted by 5000+ Worldwide Brand & Customers</p>
        </div>
      </div>
      <div>
        <img data-aos='zoom-in' data-aos-delay='1000' src={herobanner} className='lg:w-[750px] lg:h-[550px]' alt="" />
      </div>
    </section>
  )
}

export default Home