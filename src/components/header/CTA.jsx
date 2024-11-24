import React from 'react'
import CV from '../../assets/Tihomir_Stefanov_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>My CV</a>
        <a href='#contact' className='btn btn-primary'>Want to talk?</a>
    </div>
  )
}

export default CTA