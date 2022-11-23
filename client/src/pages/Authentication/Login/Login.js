import React from 'react'
import './Login.css';
import login from '../../../assets/Login.png'
import {useEffect} from 'react'

const Login = () => {
 
  const loginAction = async () => {
    const myBody = {"email": "grogu@mai.com", "password": "grogu123"};
    const response = await fetch('https://techartisans-backend.herokuapp.com/user/login/', {
        method: 'POST',
        body: myBody,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson)
  }

  useEffect(() => {
    var loginForm = document.getElementById('loginButton');
    loginForm.addEventListener("click", loginAction);
  })

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
            <form id='loginForm' onSubmit={loginAction} className='my-[100px] text-center'>
                <input name='email' type='email' placeholder='Enter your Email ID' className='my-[50px] text-4xl text-center border-x-0 border-t-0 border-b-2 border-[#5A41F3]'/>
                <input name='password' type='password' placeholder='Enter your Password' className='my-[50px] text-4xl text-center border-x-0 border-t-0 border-b-2 border-[#5A41F3]'/>
                <br />
                <button id='loginButton' className='my-[40px] text-center text-3xl font-semibold text-[#FFF] bg-[#5A41F3] px-[70px] py-4 rounded-lg'>
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
