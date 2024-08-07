import React, { useState } from 'react'
import { FaXmark, FaBars } from "react-icons/fa6"
import { Link } from "react-scroll"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    },
  ]
  return (
    <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      <h1 className='text-white md:text-4x1 text-3x1 font-bold'><span className='text-blue-300'>MultiDev </span> Enterprise</h1>
      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {
          navItems.map(({link, path})=>(
            <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-blue-300 hover:text-black text-[15px]' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))
        }
        <button className='bg-blue-300 hover:bg-white text-black px-3 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>HIRE US</button>
      </ul>
      
      <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-2x1 cursor-pointer'/> : <FaBars className='text-white text-2x1 cursor-pointer'/>}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-black p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {
            navItems.map(({link, path})=>(
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-blue-300 hover:text-black w-full text-center' to={path} offset={-100} smooth={true}>{link}</Link>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Header