import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Services = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  const servicesinfo = [
    {
      icon: icon1,
      title: "Application Development",
      label: "Read More",
    },
    {
      icon: icon2,
      title: "System Management",
      label: "Read More",
    },
    {
      icon: icon3,
      title: "Content Engagement",
      label: "Read More",
    },
  ];

  return (
    <section id='services' className='w-[90px] m-auto flex lg:flex-auto flex-col justify-between items-center gap-28 py-10'>
      <div data-aos='zoom-in' data-aos-delay='200' className='bg-black lg:p-20 p-10 flex lg:flex-row flex-col justify-center items-center gap-10 rounded-3x1'>
        {
          servicesinfo.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-6'>
              <img src={item.icon} alt="" className='size-24' />
              <h1 className='text-[26px] text-white font-semibold'>{item.title}</h1>
              <p className='text-[18px] text-slate-200'>{item.about}</p>
              <button className='text-blue-300 font-semibold text-[18px] flex justify-center items-center gap-3'>{item.label}<FaArrowRight/></button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services