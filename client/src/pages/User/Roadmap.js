 import React from 'react'
 import Header from '../../components/Header'
 import arrow from '../../assets/Arrow.png'
 import roadmap from '../../assets/roadmap2.png'
 import './Roadmap.css'
 import frontend from '../../assets/frontend.pdf'
//  import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Roadmap = () => {
  return (
    <>
    <Header />
    <div className='flex'>
        <div className='w-1/3 text-center'>
            <p className='text-2xl m-4 font-semibold'>According to your choices the paths you can choose are: </p>
            <ul className='text-center pl-20 text-2xl mb-5'>
                <li>Front-End Developer</li>
                <li>Back-End Developer</li>
                <li>Data Analyst</li>
            </ul>
            <hr />
            
            <h1 className='text-4xl font-bold my-10'>
                Find Roadmaps
            </h1>
            <select name = "category" placeholder='Enter your Email ID' className='my-[50px] text-2xl text-left border-x-0 border-t-0 border-b-2 border-orange'> 
                <option selected disabled value="null">Select Category</option>
                <option value="IT">Information Technology</option>
                <option value="marketing">Marketing</option>
            </select>
            <br />
            <select name = "stream" placeholder='Enter your Email ID' className='my-[50px] text-2xl text-left border-x-0 border-t-0 border-b-2 border-orange'> 
                <option selected disabled value="null" className='text-xl'>Select Stream</option>
                <option value="IT" className='text-xl'>Information Technology</option>
                <option value="CS" className='text-xl'>Computer Science</option>
            </select>
            <button className='my-[40px] text-center text-2xl font-semibold text-[#FFF] bg-[#2C2D31] px-[70px] py-4 rounded-lg h-[80px]'>
                  <a href='/roadmap' className='flex'> <span className='pr-4'> Generate Roadmap </span>
                  <img src={arrow} className='w-8 h-8 items-center'/> 
                  </a>
            </button>
            <br />
            <p className='text-3xl text-[#8C7D7D] text-center mx-2'>The following career roadmap is generated based upon your profile info and questionnaire which you responded. </p>
        </div>
        <div class="h-[1100px] border-l-2 p-0.5 bg-[#565555] rounded-full"></div>
        <div className='w-2/3'>
            {/* <img src={roadmap} alt="tu alt" className='w-full' /> */}
            <embed src="https://roadmap.sh/pdfs/frontend.pdf#toolbar=0#scrollbar=0" frameborder="0" style={{width: '100%', height:'100%'}}></embed>
            
        </div>
    </div>
      
    </>
  )
}

export default Roadmap
// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';

// export default function Roadmap() {
//   return (
//     <Timeline position="alternate">
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Eat</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Code</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Sleep</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//         </TimelineSeparator>
//         <TimelineContent>Repeat</TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

