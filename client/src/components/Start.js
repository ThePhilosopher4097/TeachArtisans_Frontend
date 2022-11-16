import React from 'react'
import arrow from '../assets/Arrow.png'

const Start = () => {
  return (
    <div>
        <button className='my-[40px] text-center text-2xl font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg h-[100px]'>
            <a href='/roadmap' className='flex'> <span className='pr-4'> Start Questionnaire </span>
                <img src={arrow} className='w-8 h-8 items-center'/> 
            </a>
        </button>
      
    </div>
  )
}

export default Start
