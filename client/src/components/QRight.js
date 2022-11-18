import React from 'react'
import './QRight.css'
import Question from './Question'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Start from './Start'
import Question5 from './Question5'

const QRight = () => {
  return (
    <div className='m-auto'>
        <div id='font' >
        <p className='text-blue text-3xl'>Section 1</p>
        <p className='text-orange text-3xl'>About Yourself</p>
        </div>
        <div className='my-10'>
            <Question5 />
        </div>

    </div>
  )
}

export default QRight
