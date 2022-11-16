import React from 'react'
import './QRight.css'
import Question from './Question'

const QRight = () => {
  return (
    <div className='m-auto'>
        <div id='font' >
        <p className='text-blue text-3xl'>Section 1</p>
        <p className='text-orange text-3xl'>About Yourself</p>
        </div>
        <div className='my-10'>
            <Question />
        </div>

    </div>
  )
}

export default QRight
