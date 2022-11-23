import React from 'react'
import './QRight.css'
import Question from './Question'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Start from './Start'
import Question5 from './Question5'
import { useState } from 'react'

const QRight = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "What age category do you fall under (age in years) ?",
      options: [
        { id: 0, text: "10-16"},
        { id: 1, text: "16-18"},
        { id: 2, text: "18-22"},
        { id: 3, text: "22 or Above"},
      ],
    },
    {
      text: "What is your Gender ?",
      options: [
        { id: 0, text: "Male"},
        { id: 1, text: "Female"},
        { id: 2, text: "Other"},
      ],
    },
    {
      text: "Which of the following identifies with your permanent residence?",
      options: [
        { id: 0, text: "Urban",},
        { id: 1, text: "Rural",},
      ],
    },
    {
      text: "Which category identifies the occupation of your Parent(s)?",
      options: [
        { id: 0, text: "White Collar"},
        { id: 1, text: "Agriculture"},
        { id: 2, text: "Business / Start Up"},
        { id: 3, text: "Working Class"},
      ],
    },
    {
      text: "According to the income slabs in your country what attribute suits you the best ?",
      options: [
        { id: 0, text: "Below Poverty Line"},
        { id: 1, text: "Lower Middle Class"},
        { id: 2, text: "Middle Class"},
        { id: 3, text: "Upper Middle Class / Rich"},
      ],
    },
    {
      text: "According to the income slabs in your country what attribute suits you the best ?",
      options: [
        { id: 0, text: "Below Poverty Line"},
        { id: 1, text: "Lower Middle Class"},
        { id: 2, text: "Middle Class"},
        { id: 3, text: "Upper Middle Class / Rich"},
      ],
    },
    {
      text: "What is the highest level of education you have completed ?",
      options: [
        { id: 0, text: "Bachler's Degree"},
        { id: 1, text: "Master's Degree"},
        { id: 2, text: "Class 10th"},
        { id: 3, text: "Class 12th or equivalent(Diploma) "},
      ],
    },
    {
      text: "What board did you study in until 10th ?",
      options: [
        { id: 0, text: "ICSE"},
        { id: 1, text: "CBSE"},
        { id: 2, text: "State Board"},
        { id: 3, text: "Other"},
      ],
    },
    {
      text: "What was your language medium till class 10th ?",
      options: [
        { id: 0, text: "English"},
        { id: 1, text: "Semi-English"},
        { id: 2, text: "Hindi"},
        { id: 3, text: "Regional Language"},
      ],
    },
    {
      text: "How has your Academic performance been so far?",
      options: [
        { id: 0, text: "Not Satisfactory (CGPA < 6.0 or Percentage < 70%)"},
        { id: 1, text: "Average (CGPA < 7.0 or Percentage < 80%)"},
        { id: 2, text: "Good (CGPA < 8.0 or Percentage < 90%)"},
        { id: 3, text: "Excellent (CGPA < 9.0 or Percentage < 100%)"},
      ],
    },
    {
      text: "How has your Academic performance been so far?",
      options: [
        { id: 0, text: "Science and Technology / Engineering"},
        { id: 1, text: "Medical / Pharmacy"},
        { id: 2, text: "Commerce / Economics / Business studies / Marketing"},
        { id: 3, text: "Arts / Design / Humanities"},
        { id: 4, text: "Law / Political Science"},
      ],
    },
    {
      text: "In which Tier College do you study?",
      options: [
        { id: 0, text: "Tier 1 (IITs) "},
        { id: 1, text: "Tier 2 (IIITs , NITs and Top Government Colleges) "},
        { id: 2, text: "Tier 3 (State level Colleges) "},
        { id: 3, text: "Tier 4 (Local Private Colleges)"},
      ],
    },
    {
      text: "What is your current Engineering Branch?",
      options: [
        { id: 0, text: "CS / IT "},
        { id: 1, text: "Mechanical/Civil/Robotics"},
        { id: 2, text: "EXTC / Electronics"},
        { id: 3, text: "Chemical/BioTech"},
      ],
    },
    {
      text: "Which domain do you feel the most comfortable with?",
      options: [
        { id: 0, text: "Backend Development"},
        { id: 1, text: "Frontend Development"},
        { id: 2, text: "AI/ML"},
        { id: 3, text: "Data Science/ Data Analysis"},
        { id: 4, text: "Cloud Computing / DevOps"},
        { id: 5, text: "App Development"},
        { id: 6, text: "Cyber Security"},
        { id: 7, text: "Project / Product Management"},
        { id: 8, text: "Full-Stack Development"},
      ],
    },
    {
      text: "How good are you at coding (Remember: Honesty is the best policy) ?",
      options: [
        { id: 0, text: "Newcomer: Will start learning"},
        { id: 1, text: "Beginner: Have started learning and know basics"},
        { id: 2, text: "Intermediate: Have been learning for some time and have made some basic projects"},
        { id: 3, text: "Pro: Have been learning for a long time and have made some large scale projects"},
      ],
    },
    {
      text: "Which domain are you looking to master?",
      options: [
        { id: 0, text: "Backend Development"},
        { id: 1, text: "Frontend Development"},
        { id: 2, text: "AI/ML"},
        { id: 3, text: "Data Science/ Data Analysis"},
        { id: 4, text: "Cloud Computing / DevOps"},
        { id: 5, text: "App Development"},
        { id: 6, text: "Cyber Security"},
        { id: 7, text: "Project / Product Management"},
        { id: 8, text: "Full-Stack Development"},
      ],
    },
    {
      text: "Have you done any courses/certifications in the same?",
      options: [
        { id: 0, text: "No, None yet"},
        { id: 1, text: "Yes, A few"},
        { id: 2, text: "No courses or certifications but I have a referred a lot of Open Source Material and Free Materials"},
        { id: 3, text: "Yes, many"},
      ],
    },
    {
      text: "Have you done any internships?",
      options: [
        { id: 0, text: "No, None yet"},
        { id: 1, text: "Yes, A few"},
        { id: 2, text: "No, but keep Applying"},
      ],
    },
    {
      text: "How much Work Experience do you have ?",
      options: [
        { id: 0, text: "None, just Studying"},
        { id: 1, text: "Only in College level projects and hackathons"},
        { id: 2, text: "Only in Internships"},
        { id: 3, text: "Less than a year"},
        { id: 4, text: "1-2 years"},
        { id: 5, text: "Have been working for more than 2 years"},
      ],
    },
    {
      text: "After completing your degree would you like to pursue Masters ?",
      options: [
        { id: 0, text: "No, no such plan as of now"},
        { id: 1, text: "Not Sure"},
        { id: 2, text: "Yes, with some Financial Aid"},
        { id: 3, text: "Yes"},
        ],
    },
    {
      text: "Would you like to pursue Masters abroad ?",
      options: [
        { id: 0, text: "No, no such plan as of now"},
        { id: 1, text: "Not Sure"},
        { id: 2, text: "Yes, with some Financial Aid"},
        { id: 3, text: "Yes"},
        ],
    },
    {
      text: "If Yes, Then in which country/continent?",
      options: [
        { id: 0, text: "North America(USA or Canada)"},
        { id: 1, text: "Europe"},
        { id: 2, text: "South-Eastern Asia"},
        { id: 3, text: "Australia"},
        ],
    },
    {
      text: "Have you started preparing for any competetive exams for Masters?",
      options: [
        { id: 0, text: "Not yet"},
        { id: 1, text: "Searching consistently"},
        { id: 2, text: "Preparing for GRE/TOEFL"},
        { id: 3, text: "Cleared GRE/TOEFL"},
        ],
    },
    {
      text: "Which of the following suits you best?",
      options: [
        { id: 0, text: "Private Job"},
        { id: 1, text: "Government Job"},
        { id: 2, text: "Startup"},
        { id: 3, text: "Freelancing"},
        ],
    },
    {
      text: "Which kind of a company do you prefer?",
      options: [
        { id: 0, text: "Service-Based"},
        { id: 1, text: "Product-Based"},
        { id: 2, text: "Startups"},
        { id: 3, text: "MAANG"},
        ],
    },
    {
      text: "What is you type?",
      options: [
        { id: 0, text: "Focus more on academics"},
        { id: 1, text: "Focus more on side hussle"},
        { id: 2, text: "Startups"},
        { id: 3, text: "MAANG"},
        ],
    },
  ]

  return (
    <div className='m-auto'>
        <div id='font' >
        <p className='text-blue text-3xl'>Section 1</p>
        <p className='text-orange text-3xl'>About Yourself</p>
        </div>
        <div className='my-10'>
            
        </div>

    </div>
  )
}

export default QRight
