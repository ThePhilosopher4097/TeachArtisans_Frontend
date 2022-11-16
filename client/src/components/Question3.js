import React from 'react'

const Question3 = () => {
  return (
    <>
        <div className='flex'>
            <div className='flex w-[75px] h-[75px] rounded-full bg-[#574D4D] border-orange border-2 text-center items-center justify-center'>
                <p className='text-[#FFF] p-auto text-2xl text-center'>3</p>
            </div>
            <div className='m-auto ml-8'>
                <label htmlFor="age" className='text-2xl'>Which Engineering Stream are you interested in?</label>
                <br />
            </div>
        </div>
        <form>
            <select name = "stream" placeholder='Enter Stream' className='my-[50px] text-2xl text-left bg-[#E4E4E4] border-2 border-[#000] rounded-lg h-14 p-auto'> 
                <option selected disabled value="null" className='text-xl'>Select Stream</option>
                <option value="IT" className='text-xl'>Information Technology</option>
                <option value="CS" className='text-xl'>Computer Science</option>
            </select>
            <br />
            <button className='my-10 text-center text-3xl w-[50%] font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg'>
                <a href='/'>Next</a>
            </button>
        </form>
    </>
  )
}

export default Question3
