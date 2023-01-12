import React from 'react'
import {NavLink} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs/'

const NavbarWeather = () => {


  return (
   
    <nav className='container mx-auto py-3'>
        <div className='flex items-center '>
          <NavLink to='/'><button className='text-[#60A5FA] font-bold text-3xl py-2 mx-7 hover:scale-125 duration-500'><BsArrowLeft/></button></NavLink>
          <h1 className='text-2xl text-[#60A5FA] font-bold mx-12 '>Weather</h1>
        </div>
    </nav>

  )
}

export default NavbarWeather