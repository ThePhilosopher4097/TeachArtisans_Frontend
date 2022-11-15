import React from 'react'
import Header from '../../components/Header'
import arrow from '../../assets/Arrow.png'
import roadmap from '../../assets/roadmap2.png'


const Roadmap = () => {
  return (
    <>
    <Header />
    <div className='flex'>
        <div className='w-1/3'>
            <h1 className='text-4xl font-bold my-10'>
                Find Roadmaps
            </h1>
            <select name = "category" placeholder='Enter your Email ID' className='my-[50px] text-2xl text-left border-x-0 border-t-0 border-b-2 border-orange'> 
                <option selected disabled value="null">Select Category</option>
                <option value="IT">Information Technology</option>
                <option value="marketing">Marketing</option>
            </select>
            <br />
            <select name = "stream" placeholder='Enter your Email ID' className='my-[50px] text-2xl text-left border-x-0 border-t-0 border-b-2 border-orange'> 
                <option selected disabled value="null" className='text-xl'>Select Stream</option>
                <option value="IT" className='text-xl'>Information Technology</option>
                <option value="CS" className='text-xl'>Computer Science</option>
            </select>
            <button className='my-[40px] text-center text-2xl font-semibold text-[#FFF] bg-[#2C2D31] px-[70px] py-4 rounded-lg h-[80px]'>
                  <a href='/roadmap' className='flex'> <span className='pr-4'> Generate Roadmap </span>
                  <img src={arrow} className='w-8 h-8 items-center'/> 
                  {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 15V11H5V9H10V5L15 10L10 15Z" fill="white"/>
                  </svg> */}

                  </a>
            </button>
            <br />
            <p className='text-3xl text-[#8C7D7D] text-center mx-2'>The following career roadmap is generated based upon your profile info and questionnaire which you responded. </p>
        </div>
        <div class="h-[1100px] border-l-2 p-0.5 bg-[#565555] rounded-full"></div>
        <div className='w-2/3'>
            <img src={roadmap} alt="tu alt"className='w-full' />

        </div>
    </div>
      
    </>
  )
}

export default Roadmap
