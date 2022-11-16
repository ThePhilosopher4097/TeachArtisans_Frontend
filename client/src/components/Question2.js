import React from 'react'
import emoji from '../assets/Emojis.png'

const Question2 = () => {
  return (
    <>
    <div>
        <div className='flex'>
            <div className='flex w-[75px] h-[75px] rounded-full bg-[#574D4D] border-orange border-2 text-center items-center justify-center'>
                <p className='text-[#FFF] p-auto text-2xl text-center'>2</p>
            </div>
            <div className='m-auto ml-8'>
                <label htmlFor="age" className='text-2xl'>Would you like to go to abroad for MS ?</label>
                <br />
            </div>
        </div>
        <form>
            {/* <input type = 'radio' placeholder='Your Answer...' className=' m-auto my-10 border-2 border-[#000] rounded-lg w-[105%] h-14 text-left text-xl' /> */}
            <img src={emoji} className='m-auto w-[110%] my-10'/>
            <button className='my-[25px] text-center text-3xl w-[50%] font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg'>
                <a href='/'>Next</a>
            </button>
        </form>
      
    </div>
      
    </>
  )
}

export default Question2
