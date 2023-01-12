import { useState, useEffect } from "react";
import React, { useSearchParams, NavLink}from 'react-router-dom';
import NavbarSearchCity from '../components/SearchCity/NavbarSearchCity'
import NavBarWeather from '../components/Weather/NavbarWeather'
import axios from 'axios'
import {BsFillGeoAltFill} from 'react-icons/bs'
import {BsWind} from 'react-icons/bs'
import {IoWaterSharp} from 'react-icons/io5'



const Weather = () => {


  const [searchParams] = useSearchParams()

  const query = searchParams.get("q")


  const [weather, setWeather] = useState(null)


  const iconurl1 = 'https://openweathermap.org/img/wn/'

  const iconurl2 = '@4x.png'
  

  useEffect(() => {
    async function getData() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      try {
        const response = await axios.get(url)
        setWeather(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!weather) {
    return(
    <div className='container mx-auto flex items-center justify-center h-screen '>
      <div className='w-[23.063em] h-[18.813em]  rounded-xl border border-black shadow-xl bg-white'>
        <NavbarSearchCity />
        <hr className='border'/>
        <div className="flex flex-col items-center  py-12">
          <h1 className="text-2xl text-center">There is no city/country with this result: <span className="font-bold">{query}</span></h1>
          <NavLink to="/"><button className="bg-[#60a5fa8f]  text-lg font-semibold border border-black my-3 rounded-xl px-3 py-3 hover:scale-110 duration-500">Return To Home Page</button></NavLink>
        </div>   
      </div>
    </div>

    )
  }

  return (
    <div className='relative container mx-auto flex items-center justify-center h-screen '>
      <div className='w-[23.063em] h-[31.25em]  rounded-xl border border-black shadow-xl bg-white'>
        <NavBarWeather />
        <hr className='border'/>  
        <div className="my-5 flex justify-center items-center"> 
          <div className="text-center">
            <img className="mx-auto justify-center items-center w-[7.313em] h-[7em] hover:scale-125 duration-500" src={iconurl1 + weather.weather[0].icon + iconurl2} alt="img-weather" />
            <p className="text-5xl py-1">{Math.floor(weather.main.temp*1)/1}ºC</p>
            <p className="text-2xl py-1">{weather.weather[0].description}</p>
            <div className="flex justify-center items-center pr-3">
              <BsFillGeoAltFill className="h-9 w-5 mx-1 text-[#60A5FA] hover:scale-125 duration-500"/>
              <div>
                <p className="text-xl">{weather.name}</p>
              </div>
            </div>
          </div>
        </div>
        
          <div className="grid grid-rows-2 grid-flow-col mr-10 items-center justify-evenly my-20">
            <div className="row-span-2 flex">
              <BsWind className="h-12 w-16 pl-7 text-[#60A5FA] hover:scale-110 duration-500"/>
              <div>
                <h1 className="font-bold text-2xl text-center pl-2">{Math.floor(weather.wind.speed)}<span className="text-xl font-normal"> km/h</span></h1>
                <p className="text-md text-center">Wind</p>
              </div>
            </div>
            <div className="flex row-span-2 col-end-4">
              <IoWaterSharp className="h-12 w-24 pl-12 font-bold text-[#60A5FA] hover:scale-110 duration-500"/>
              <div>
                <h1 className="font-bold text-2xl  text-center ">{weather.main.humidity}<span className="text-xl font-normal">%</span></h1>
                <p className="text-md text-center">Humidity</p>
              </div>
            </div>
          </div> 
      </div>
    </div>
    
  )

}

export default Weather