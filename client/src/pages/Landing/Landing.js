import React from 'react'
import './Landing.css'
import landing from'../../assets/Landing Page BG 1.png'
import techart from '../../assets/TechArtisans.png'
import logo from '../../assets/logo.png'

const Landing = () => {
  return (
    <>
      <div className="justify-right mx-5">
      <header className=' my-5'>
        <div className='flex justify-between'>
          <div>
        <img src={logo} className='m-4'/>
        </div>
        <div>
        <nav className='text-right'>
          <a href="/login" className='text-right my-5 p-5 text-2xl mx-7'>
            Login
          </a>
          <button className='bg-button-orange text-[#FFFFFF] rounded-full px-7 py-3 text-2xl '>
          <a href="/register" className=''>
            Sign Up
          </a>
          </button>
          
        </nav>
        </div>
        </div>
      </header>
      </div>
      <div className='flex'>
      <div className='mx-[200px] text-5xl my-[100px] font-bold w-1/2 text-left'>
        <span className='text-blue'> Find </span>
        <br />
        <br />
         your <span className='text-orange'> Best </span> 
        <br />
        <br />

        <span className='text-red'> Career </span> path 

        <br />
        <br />

         <span>within a snap</span> 
        <br />
        <br />
      </div>
      <div className='image'>
        {/* <img src='https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/07/1600356731_career-counselling.jpg'>

        </img> */}
        <img src={landing}></img>

    
        
      
      </div>
      </div>

      
    </>
  )
}

export default Landing
