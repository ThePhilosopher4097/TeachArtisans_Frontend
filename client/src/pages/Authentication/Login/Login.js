import React from 'react'
import './Login.css';
import login from '../../../assets/Login.png'

const Login = () => {
  return (
    <>
      <div className='flex overflow-hidden'>
        <div className='w-1/2'>
            <img src={login} style={{height: '73%' }}></img>
            
        </div>
        <div className='w-1/3'>
            <h1 className='text-5xl text-center mt-[35px] font-bold'>
                Welcome Back 
            </h1>
            <form method='POST' action='https://techartisans-backend.herokuapp.com/user/login' className='my-[100px] text-center'>
                <input name='email' type='email' placeholder='Enter your Email ID' className='my-[50px] text-4xl text-center border-x-0 border-t-0 border-b-2 border-[#5A41F3]'/>
                <input name='password' type='password' placeholder='Enter your Password' className='my-[50px] text-4xl text-center border-x-0 border-t-0 border-b-2 border-[#5A41F3]'/>
                <br />
                <button className='my-[40px] text-center text-3xl font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg'>
                  Login
                </button>
                <p className='text-xl'>Don't have an account yet? <a href='/register' className='underline font-bold text-[#5A41F3]'> Register </a> </p>

            </form>
            <br />
           
        </div>
      </div>
      
    </>
  )
}

export default Login
