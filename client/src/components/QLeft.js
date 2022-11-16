import React from 'react'
import profile from '../assets/Profile.png'


const QLeft = () => {
  return (
    <>

        <div className='w-1/3 m-5 my-14'>
            <h1 className='text-5xl text-center font-bold'>
                Know thyself
            </h1>
            <p className='text-[#9C5B5B] text-3xl my-12 m-5 font-semibold mt-14'>
                Answer this questionnaire 
                and 
                let us find your cup of tea !
            </p>
            <img src={profile} alt="tu alt" className='my-12 m-5' style={{height: "60%", width: "100%"}}/>
        </div>
    
      
    </>
  )
}

export default QLeft
