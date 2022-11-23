import React from 'react'
import company from '../assets/Company_Name.png'
import user from '../assets/User_Logo.png'
import './Header.css'
import {Link} from 'react-router-dom'
import { Button } from 'antd'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
    <div className='flex justify-between bg-[#D9D9D9] h-[25%]' id='body'>
        <div className='m-6 text-3xl '>
            <img src={logo} alt="logo"/>   
            {/* <h1 className='header'> 
              <span className='techa'> TechArtisans </span>
            <br />
              <h6 className='prop'> Explore Menu </h6>
            </h1> */}
        </div>
        <div className='m-8 flex'>
          
        <button id='but' className='bg-button-blue text-[#FFFFFF] rounded-lg px-7 py-3 text-2xl m-2' style={{height: 65}}>
          <Link to='/roadmap'>
            <Button type='' className='button1'>
              My Roadmap
            </Button>
          </Link>
        </button>
        
        <button id='but' className='bg-button-blue text-[#FFFFFF] rounded-lg px-7 py-3 text-2xl m-2' style={{height: 65}}>
          <Link to='/questionnaire'>
            <Button type='' className='button1'>
              Questionnaire
            </Button>
          </Link>
        </button>
        <button id='but' className='bg-button-blue text-[#FFFFFF] rounded-lg px-7 py-3 text-2xl m-2' style={{height: 65}}>
          <Link to='/explore'>
            <Button type='' className='button1'>
              Explore
            </Button>
          </Link>
        </button>
       
          <Link to='/profile' className='photo'>
            <Button type='' className='button1'>
            <svg width="48" height="50" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.512296 20.6921C0.551508 19.9002 0.684459 19.1354 0.910462 18.3964C1.18428 17.501 1.57854 16.6764 2.09315 15.9208C2.61065 15.1608 3.22182 14.4862 3.92756 13.896C4.62428 13.3134 5.41541 12.8529 6.30416 12.5153L7.22952 12.1638L6.39745 11.6276C5.97229 11.3536 5.59408 11.0337 5.26158 10.6675C4.92661 10.2985 4.63667 9.88973 4.39178 9.43996C4.14925 8.99456 3.97198 8.5313 3.85888 8.0493C3.74395 7.55951 3.67805 7.0478 3.66212 6.51342C3.663 5.67877 3.81589 4.90214 4.11766 4.17874C4.42348 3.44563 4.84153 2.8122 5.37133 2.27376C5.90373 1.73266 6.52386 1.30069 7.23521 0.977342C7.9336 0.65989 8.68211 0.5 9.48636 0.5C10.2924 0.5 11.0424 0.656374 11.7417 0.966496C12.449 1.28016 13.0618 1.70962 13.584 2.25586C14.109 2.80493 14.5293 3.44587 14.8444 4.18282C15.1542 4.90733 15.3106 5.68492 15.3106 6.52063C15.3106 7.0414 15.2494 7.54885 15.1275 8.04394C15.0061 8.53654 14.8246 9.00037 14.5827 9.43669C14.3367 9.8807 14.049 10.2879 13.7197 10.659C13.398 11.0215 13.0179 11.3443 12.5766 11.6267L11.743 12.1602L12.667 12.5147C13.3362 12.7714 13.9666 13.1084 14.5589 13.5262C14.8404 13.7248 15.1088 13.9398 15.364 14.1714H14.399C13.7097 13.6546 12.9607 13.2595 12.1534 12.9877C11.2957 12.6989 10.4077 12.5503 9.49127 12.5413V12.5413H9.48636C8.71618 12.5413 7.96939 12.6451 7.24761 12.8539C6.53276 13.0606 5.86336 13.349 5.24086 13.7196C4.61649 14.0914 4.04979 14.5445 3.54137 15.0778C3.03592 15.6079 2.60011 16.1921 2.23435 16.8296C1.86649 17.4708 1.58284 18.16 1.38269 18.8958C1.22403 19.479 1.12818 20.078 1.09463 20.6921H0.512296ZM21.4315 15.9535L20.7192 15.2191L21.0857 14.8412L23.302 17.1167L21.0857 19.3921L20.7192 19.0143L21.4315 18.2798L22.254 17.4317H21.0726H14.7295V16.8016H21.0726H22.254L21.4315 15.9535ZM14.6434 22.0071L16.8598 19.7316L17.2263 20.1095L16.514 20.8439L15.6914 21.6921H16.8729H23.2159V22.3222H16.8729H15.6914L16.514 23.1703L17.2263 23.9047L16.8598 24.2826L14.6434 22.0071ZM4.24318 6.52063C4.24318 7.26198 4.37832 7.96107 4.65303 8.61251C4.92298 9.25269 5.29355 9.82186 5.76439 10.3167C6.2387 10.8151 6.79566 11.2054 7.43147 11.4864C8.07444 11.7705 8.76121 11.9111 9.48636 11.9111C10.2042 11.9111 10.8867 11.7701 11.5289 11.4864C12.1627 11.2063 12.7186 10.8216 13.1927 10.3328C13.6654 9.84537 14.0403 9.27566 14.3184 8.6283C14.6022 7.96746 14.7382 7.26205 14.7295 6.51764C14.7292 5.78495 14.5937 5.08793 14.3207 4.43111C14.0506 3.78146 13.679 3.2099 13.205 2.72117C12.731 2.23244 12.1718 1.8443 11.5321 1.5563C10.8817 1.26352 10.197 1.12119 9.48306 1.13016C8.75918 1.13058 8.07663 1.2712 7.44138 1.55597C6.81697 1.83589 6.26339 2.21945 5.78337 2.70504C5.29876 3.19527 4.92165 3.7732 4.65108 4.43342C4.37897 5.09743 4.24318 5.79446 4.24318 6.52063Z" fill="black" stroke="black"/>
        </svg>


</svg>
             
            </Button>
          </Link>


        </div>
    </div>
      
    </>
  )
}

export default Header
