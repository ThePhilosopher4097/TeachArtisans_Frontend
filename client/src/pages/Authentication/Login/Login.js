import React from 'react'
import './Login.css';
import login from '../../../assets/Login.png'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // const navigate=useNavigate();
 
  // const loginAction = async () => {
  //   console.log("dhbifdgbi")
    // const myBody = {"email": "grogu@mai.com", "password": "grogu123"};
    // const response = await fetch('https://techartisans-backend.herokuapp.com/user/login/', {
    //     method: 'POST',
    //     body: myBody,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
  //   const myJson = await response.json();
  //   console.log(myJson)
  //   navigate("/questionnaire");
  // }

  // useEffect(() => {
  //   var loginForm = document.getElementById('loginButton');
  //   loginForm.addEventListener("click", loginAction);
  // })
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] =useState([{}]);

  const handleEmailChange =(e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange =(e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const authentication = getAuth();

    console.log("Email: ", email);
    console.log("Password: ", password);
    navigate("/questionnaire");

    const myBody = {email: email, password: password};
    console.log(JSON.stringify(myBody));
    const response = await fetch('https://techartisans-backend.herokuapp.com/user/login',{
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myBody)
    })
    if(response.ok){
      console.log('response')
      navigate("/questionnaire");
    }
    // navigate("/questionnaire");
  }
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
            <form id='loginForm' onSubmit={handleSubmit} className='my-[100px] text-center'>
                <input onChange={handleEmailChange} name='email' type='email' placeholder='Enter your Email ID' className='my-[50px] text-4xl text-center  border-2 border-[#5A41F3] rounded-lg h-16'/>
                <input onChange={handlePasswordChange} name='password' type='password' placeholder='Enter your Password' className='my-[50px] text-4xl text-center border-2 border-[#5A41F3] rounded-lg h-16'/>
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
