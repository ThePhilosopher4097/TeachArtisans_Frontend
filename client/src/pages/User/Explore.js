import React from 'react'
import Header from '../../components/Header'
import astronaut from '../../assets/Astronaut.png'
import certifications from '../../assets/Certifications.png'
import courses from '../../assets/Courses.png'
import job from '../../assets/job.png'
import roadmap from '../../assets/Roadmap.png'
import study from '../../assets/Study.png'
import mentor from '../../assets/Mentor.png'

const Explore = () => {
  return (
    <>
    <Header />
    <div className='flex'>
        <div className='my-10 w-1/3 block whitespace-nowrap'>
            <p className='text-4xl mt-4 mx-[111px] font-semibold'><span className='text-red'>Explore</span> the <span className='text-blue'> Infinity </span></p>
            <br />
            <img src={astronaut} style={{height: '65%'}} className='my-4 relative ml-8' />
            <br />
            <p className='text-4xl mb-4 mx-[111px] font-semibold'><span className='text-[#16C3CE]'>Sky</span> is the limit for you</p>
        </div>
        <div className='block'>
        <div className='flex w-2/3'>
            <div className='m-10 ml-[250px] my-20'>
                <a href='/explore'>
                <p className='text-2xl font-bold my-4'> Certifications </p>
                {/* <br />
                <img src={astronaut} style={{height: '15%'}} className='my-4 relative ml-8' /> */}
                <img src={certifications} style={{height: '120%'}}/>
                </a>
            </div>
            <div className='m-10 ml-[250px] my-20'>
                <a href='/explore'>
                <p className='text-2xl font-bold my-4'> Courses </p>
                {/* <br />
                <img src={astronaut} style={{height: '15%'}} className='my-4 relative ml-8' /> */}
                <img src={courses} style={{height: '120%'}}/>
                </a>
            </div>
        </div>
        <div className='flex w-2/3'>
            <div className='m-10 ml-[270px] my-20'>
                <a href='/explore'>
                <p className='text-2xl font-bold my-4'>Internships and Jobs</p>
                {/* <br />
                <img src={astronaut} style={{height: '15%'}} className='my-4 relative ml-8' /> */}
                <img src={job} style={{height: '120%'}}/>
                </a>
            </div>
            <div className='m-10 ml-[260px] my-20'>
                <a href='/explore'>
                <p className='text-2xl font-bold my-4'> Explore Roadmaps </p>
                {/* <br />
                <img src={astronaut} style={{height: '15%'}} className='my-4 relative ml-8' /> */}
                <img src={roadmap} style={{height: '120%'}}/>
                </a>
            </div>
        </div>
        <div className='flex w-2/3'>
            <div className='m-10 ml-[270px] my-20'>
                <a href='/explore'>
                <p className='text-2xl font-bold my-4'>Higher Education <span className='text-[#FFF]'>jcnbdiusbc</span></p>
                {/* <br />
                <img src={astronaut} style={{height: '15%'}} className='my-4 relative ml-8' /> */}
                <img src={study} style={{height: '120%'}}/>
                </a>
            </div>
            <div className='m-10 ml-[260px] my-20'>
                <a href='/explore'>
                <p className='text-2xl font-bold my-4'> Connect With Mentors </p>
                {/* <br />
                <img src={astronaut} style={{height: '15%'}} className='my-4 relative ml-8' /> */}
                <img src={mentor} style={{height: '120%'}}/>
                </a>
            </div>
        </div>
        </div>
        

    </div>
    </>
  )
}

export default Explore
