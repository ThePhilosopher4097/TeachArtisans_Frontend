import React from 'react'

const Question5 = () => {
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
                <div className='bg-[#D7CECE] text-[#505050] rounded-full h-auto w-[75%] text-center m-auto ml-10'>
                    <input type="radio" value="Male" name="gender" className='m-10 text-2xl font-semibold' /> MAANG
                </div>
                <br />
                <div className='bg-[#D7CECE] text-[#505050] rounded-full h-[50%] w-[75%] text-center m-auto ml-10'>
                    <input type="radio" value="Male" name="gender" className='m-10 text-2xl font-semibold' /> Start Up
                </div>
                <br />
                <div className='bg-[#D7CECE] text-[#505050] rounded-full h-[50%] w-[75%] text-center m-auto ml-10'>
                    <input type="radio" value="Male" name="gender" className='m-10 text-2xl font-semibold' /> Service based
                </div>
                <br />
                <div className='bg-[#D7CECE] text-[#505050] rounded-full h-[50%] w-[75%] text-center m-auto ml-10'>
                    <input type="radio" value="Male" name="gender" className='m-10 text-2xl font-semibold' /> Freelance
                </div>
                <br />
            </div>   
            <br />  
            <button className='my-[25px] text-center text-3xl w-[50%] font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg'>
                <a href='/'>Next</a>
            </button>
        </form>
      
    </>
  )
}

export default Question5
