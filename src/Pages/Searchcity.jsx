import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import NavbarSearchCity from '../components/SearchCity/NavbarSearchCity'



const Searchcity = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    navigate(`/weather?q=${search}`)
    setSearch("")
    
  }

  

  return (
    
    <div className='relative container mx-auto flex items-center justify-center h-screen '>
      <div className='w-[23.063em] h-[18.813em]  rounded-xl border border-black shadow-xl bg-white max-msm:w-[17em]'>
        <NavbarSearchCity />
        <hr className='border'/>
         <form onSubmit={handleSubmit} className='my-28 flex justify-center items-center'>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className='fixed w-[303px] h-[46px] text-center border border-black text-xl rounded-lg  shadow-lg hover:border-[#60A5FA] focus:border-[#60A5FA] focus:outline-none hover:scale-110 duration-1000 max-msm:w-[230px]' type='text' placeholder='Enter city/country name'  />
         </form>    
      </div>
    </div>

    
  )
}

export default Searchcity