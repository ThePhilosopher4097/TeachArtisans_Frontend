import { Button, Carousel } from 'antd';
import React from 'react'
import './Landingspam.css';
// import girl from './assets/girl.png';
// import mobile from './assets/mobile.png';
import mobile from '../../assets/mobile.png'
import { Link } from 'react-router-dom';
import bg1 from '../../assets/bg1.png'

export default function LandingPage() {
  return (
    <div>
      <div className='Heading'>
       <a href="/register">
            TechArtisans
       </a>
      </div>
      <div className='menubar'>
        <Link to="/login">
          <Button type='link' className='link-button'>Log In</Button>
        </Link>
        <Link to="/register">
          <Button size='large' className='action-button button-shadow'>Sign Up</Button>
        </Link>
      </div>
      <Carousel autoplay={true} autoplaySpeed={3000} initialSlide={2} easing="cubic-bezier(0.075, 0.82, 0.165, 1)" speed={800}  pauseOnHover={false}>
        <div className='slides slide-1'>
          <div className="slide-wrapper">
          <div className="textbox-1">
              <h1 ><span className='blue'> Find </span></h1>
              <h1> your <span className='orange'>Best</span></h1>
              <h1> <span className='red'>Career</span> path </h1>
              <h1>within a snap</h1>

            </div>
            <img src={bg1} alt="bg"></img>
            

          </div>
        </div>

        <div className='slides slide-2'>
          <div className="slide-wrapper">
            <img src={mobile} alt="Mobile"></img>
            <div className="textbox-2">
            <h1> <span className='red'>Shaping</span> your </h1> <h1> <span className='blue'> Career </span></h1>
            <h1> <span className='red'>Demistifying</span> the </h1> <h1> <span className='blue'> Future </span></h1>
            </div>

           


            

          </div>
        </div>
      </Carousel>
    </div>
  )
}
