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
      section: "About Yourself",
    },
    {
      text: "What is your Gender ?",
      options: [
        { id: 0, text: "Male"},
        { id: 1, text: "Female"},
        { id: 2, text: "Other"},
      ],
      section: "About Yourself",
    },
    {
      text: "Which of the following identifies with your permanent residence?",
      options: [
        { id: 0, text: "Urban",},
        { id: 1, text: "Rural",},
      ],
      section: "About Yourself",
    },
    {
      text: "Which category identifies the occupation of your Parent(s)?",
      options: [
        { id: 0, text: "White Collar"},
        { id: 1, text: "Agriculture"},
        { id: 2, text: "Business / Start Up"},
        { id: 3, text: "Working Class"},
      ],
      section: "About Yourself",
    },
    {
      text: "According to the income slabs in your country what attribute suits you the best ?",
      options: [
        { id: 0, text: "Below Poverty Line"},
        { id: 1, text: "Lower Middle Class"},
        { id: 2, text: "Middle Class"},
        { id: 3, text: "Upper Middle Class / Rich"},
      ],
      section: "About Yourself",
    },
    {
      text: "According to the income slabs in your country what attribute suits you the best ?",
      options: [
        { id: 0, text: "Below Poverty Line"},
        { id: 1, text: "Lower Middle Class"},
        { id: 2, text: "Middle Class"},
        { id: 3, text: "Upper Middle Class / Rich"},
      ],
      section: "About Yourself",
    },
    {
      text: "What identifies you personality ?",
      options: [
        { id: 0, text: "Introverted"},
        { id: 1, text: "Ambivert"},
        { id: 2, text: "Extroverted"},
        ],
        section: "About Yourself",

    },
    {
      text: "What is your Relationship Status",
      options: [
        { id: 0, text: "Already in a relationship"},
        { id: 1, text: "Would like to settle with someone after a while"},
        { id: 2, text: "Focused on work right now, would look for building relationships later"},
        { id: 3, text: "Work is my life ! Stay single, stay rich, stay independant!"},
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
      section: "Education",
    },
    {
      text: "What board did you study in until 10th ?",
      options: [
        { id: 0, text: "ICSE"},
        { id: 1, text: "CBSE"},
        { id: 2, text: "State Board"},
        { id: 3, text: "Other"},
      ],
      section: "Education",
    },
    {
      text: "What was your language medium till class 10th ?",
      options: [
        { id: 0, text: "English"},
        { id: 1, text: "Semi-English"},
        { id: 2, text: "Hindi"},
        { id: 3, text: "Regional Language"},
      ],
      section: "Education",
    },
    {
      text: "How has your Academic performance been so far?",
      options: [
        { id: 0, text: "Not Satisfactory (CGPA < 6.0 or Percentage < 70%)"},
        { id: 1, text: "Average (CGPA < 7.0 or Percentage < 80%)"},
        { id: 2, text: "Good (CGPA < 8.0 or Percentage < 90%)"},
        { id: 3, text: "Excellent (CGPA < 9.0 or Percentage < 100%)"},
      ],
      section: "Education",
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
      section: "Education",
    },
    {
      text: "In which Tier College do you study?",
      options: [
        { id: 0, text: "Tier 1 (IITs) "},
        { id: 1, text: "Tier 2 (IIITs , NITs and Top Government Colleges) "},
        { id: 2, text: "Tier 3 (State level Colleges) "},
        { id: 3, text: "Tier 4 (Local Private Colleges)"},
      ],
      section: "Education",
    },
    {
      text: "What is your current Engineering Branch?",
      options: [
        { id: 0, text: "CS / IT "},
        { id: 1, text: "Mechanical/Civil/Robotics"},
        { id: 2, text: "EXTC / Electronics"},
        { id: 3, text: "Chemical/BioTech"},
      ],
      section: "Education",
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
      section: "Software Skills",
    },
    {
      text: "How good are you at coding (Remember: Honesty is the best policy) ?",
      options: [
        { id: 0, text: "Newcomer: Will start learning"},
        { id: 1, text: "Beginner: Have started learning and know basics"},
        { id: 2, text: "Intermediate: Have been learning for some time and have made some basic projects"},
        { id: 3, text: "Pro: Have been learning for a long time and have made some large scale projects"},
      ],
      section: "Software Skills",
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
      section: "Software Skills",
    },
    {
      text: "Have you done any courses/certifications in the same?",
      options: [
        { id: 0, text: "No, None yet"},
        { id: 1, text: "Yes, A few"},
        { id: 2, text: "No courses or certifications but I have a referred a lot of Open Source Material and Free Materials"},
        { id: 3, text: "Yes, many"},
      ],
      section: "Software Skills",
    },
    {
      text: "Have you done any internships?",
      options: [
        { id: 0, text: "No, None yet"},
        { id: 1, text: "Yes, A few"},
        { id: 2, text: "No, but keep Applying"},
      ],
      section: "Work Experience",
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
      section: "Work Experience",
    },
    {
      text: "After completing your degree would you like to pursue Masters ?",
      options: [
        { id: 0, text: "No, no such plan as of now"},
        { id: 1, text: "Not Sure"},
        { id: 2, text: "Yes, with some Financial Aid"},
        { id: 3, text: "Yes"},
        ],
        section: "Higher Studies",
    },
    {
      text: "Would you like to pursue Masters abroad ?",
      options: [
        { id: 0, text: "No, no such plan as of now"},
        { id: 1, text: "Not Sure"},
        { id: 2, text: "Yes, with some Financial Aid"},
        { id: 3, text: "Yes"},
        ],
        section: "Higher Studies",
    },
    {
      text: "If Yes, Then in which country/continent?",
      options: [
        { id: 0, text: "North America(USA or Canada)"},
        { id: 1, text: "Europe"},
        { id: 2, text: "South-Eastern Asia"},
        { id: 3, text: "Australia"},
        ],
        section: "Higher Studies",
    },
    {
      text: "Have you started preparing for any competetive exams for Masters?",
      options: [
        { id: 0, text: "Not yet"},
        { id: 1, text: "Searching consistently"},
        { id: 2, text: "Preparing for GRE/TOEFL"},
        { id: 3, text: "Cleared GRE/TOEFL"},
        ],
        section: "Higher Studies",
    },
    {
      text: "Which of the following suits you best?",
      options: [
        { id: 0, text: "Private Job"},
        { id: 1, text: "Government Job"},
        { id: 2, text: "Startup"},
        { id: 3, text: "Freelancing"},
        ],
        section: "Jobs",
    },
    {
      text: "Which kind of a company do you prefer?",
      options: [
        { id: 0, text: "Service-Based"},
        { id: 1, text: "Product-Based"},
        { id: 2, text: "Startups"},
        { id: 3, text: "MAANG"},
        ],
        section: "Jobs",
    },
    {
      text: "What is you type?",
      options: [
        { id: 0, text: "Focus more on academics"},
        { id: 1, text: "Focus more on side hussle"},
        { id: 2, text: "Try to maintain a balance"},
        ],
        section: "Jobs",
    },
    {
      text: "What package do you expect as a fresher?",
      options: [
        { id: 0, text: "3-5 LPA"},
        { id: 1, text: "5-10 LPA"},
        { id: 2, text: "10-15 LPA"},
        { id: 3, text: "15 LPA + "},
        ],
        section: "Jobs",
    },
    {
      text: "What do you identify with more?",
      options: [
        { id: 0, text: "Technical"},
        { id: 1, text: "Management"},
        ],
        section: "Jobs",
    },
    {
      text: "What work type suits you best?",
      options: [
        { id: 0, text: "Work from Home"},
        { id: 1, text: "Hybrid Work Culture"},
        { id: 2, text: "Work from Office"},
        ],
        section: "Jobs",
    },
    {
      text: "What resembles you?",
      options: [
        { id: 0, text: "Study, Job and Settle down"},
        { id: 1, text: "Study and then Research"},
        { id: 2, text: "Study, Higher Study, Get a Lucrative Job"},
        { id: 3, text: "Study and Parallely do side hustle and build something of my own"},
        ],
        section: "Jobs",
    },
    {
      text: "What is your preferred work culture?",
      options: [
        { id: 0, text: "Chill job, work-life balance"},
        { id: 1, text: "9-5 Job"},
        { id: 2, text: "Day and Night intense work"},
        { id: 3, text: "Intense work along with side hussle"},
        ],
        section: "Jobs",
    },
    
    
  ]
  const optionClicked = (a) => {
  if (currentQuestion + 1 < questions.length) {
    console.log(a);
    setCurrentQuestion(currentQuestion + 1);

  } 
}
function handleBack(){
  setCurrentQuestion(currentQuestion-1);
}
function handleNext(){
  setCurrentQuestion(currentQuestion+1);
}

  return (
    <div className='m-auto mb-5'>
        <div id='font' className='my-3'>
        <p className='text-blue text-3xl m-auto'>Section: </p>
        <p className='text-orange text-3xl m-auto'>{questions[currentQuestion].section}</p>
        </div>
        {/* <Question /> */}
        <div className="question-card my-10">
          {/* Current Question  */}
          <h2 className='text-2xl mb-5'>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text text-xl my-5">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ol> 
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={event => optionClicked(option.text)}
                  className='text-xl my-3'>

                  {option.text}
                </li>
              );
            })}
          </ol>
          <div className='flex justify-evenly my-10'>
          <div >
            <button onClick={handleBack} className='btn bg-[#000] text-[#fff] text-xl'>Back</button>
          </div>
          <div >
            <button onClick={handleNext} className='btn bg-[#000] text-[#fff] text-xl'>Next</button>
          </div>
        </div>
        </div>
        

    </div>
  )
}

export default QRight
