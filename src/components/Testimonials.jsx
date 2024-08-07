import React, { useEffect } from 'react'
import Slider from "react-slick"
import testimonials from '../assets/testimonial.png'
import { FaQuoteLeft } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    arrows: false
  };

  const testidata = [
    {
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem tempore earum sapiente, mollitia quidem architecto et, assumenda perspiciatis, blanditiis vel ex repudiandae quaerat voluptatibus. Natus accusamus repudiandae labore voluptas aliquam.",
      name: "William Jay",
      post: "Web Developer",
    },
    {
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem tempore earum sapiente, mollitia quidem architecto et, assumenda perspiciatis, blanditiis vel ex repudiandae quaerat voluptatibus. Natus accusamus repudiandae labore voluptas aliquam.",
      name: "Jennifer Helen",
      post: "UI/UX Designer",
    },
    {
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem tempore earum sapiente, mollitia quidem architecto et, assumenda perspiciatis, blanditiis vel ex repudiandae quaerat voluptatibus. Natus accusamus repudiandae labore voluptas aliquam.",
      name: "James Robin",
      post: "Mobile Developer",
    },
  ];

  return (
    <section id='testimonials' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div className='lg:w-[50%] w-full'>
        <img data-aos='zoom-in' data-aos-delay='200' src={testimonials} alt="testimonial image" className='lg:w-[1000px] lg:h-[550px]' />
      </div>
      <div className='lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center gap-4'>
        <h1 data-aos='zoom-in' data-aos-delay='400' className='text-blue-500 text-[38px] font-semibold'>TESTIMONIALS</h1>
        <h1 data-aos='zoom-in' data-aos-delay='600' className='text-black font-semibold lg:text-[40px] text-[30px] lg:leading-[50px] leading-[40px] text-center'>What Our Client Says</h1>
        <div data-aos='zoom-in' data-aos-delay='600' className='w-full mt-10'>
          <Slider {...settings}>
          {
            testidata.map((item, index) => (
              <div key={index}>
                <div className='w-full flex justify-between items-start gap-6'>
                  <div>
                    <div id='icon-box' className='bg-black p-6 rounded-full'>
                      <FaQuoteLeft className='text-blue-300 size-[35px]'/>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='text-x1 text-justify'>{item.review}</p>
                    <div>
                      <h1 className='text-black font-semibold text-[25px]'>{item.name}</h1>
                      <p className='text-lg'>{item.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials