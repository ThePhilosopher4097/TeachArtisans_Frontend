import React from 'react'

const Question4 = () => {
  return (
    <>
        <div className='flex'>
            <div className='flex w-[75px] h-[75px] rounded-full bg-[#574D4D] border-orange border-2 text-center items-center justify-center'>
                <p className='text-[#FFF] p-auto text-2xl text-center'>4</p>
            </div>
            <div className='m-auto ml-8'>
                <label htmlFor="age" className='text-2xl'>Are you looking for a job?</label>
                <br />
            </div>
        </div>
        <form>
            <div className='text-2xl my-5'>
                <input type="radio" value="Male" name="gender" className='m-10 text-2xl'/> Yes
                <br />
                <input type="radio" value="Female" name="gender" className='m-10'/> No      
            </div>   
            <br />  
            <button className='my-[25px] text-center text-3xl w-[50%] font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg'>
                <a href='/'>Next</a>
            </button>
        </form>
      
    </>
  )
}

export default Question4
