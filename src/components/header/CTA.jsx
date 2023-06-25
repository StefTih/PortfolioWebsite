import React from 'react'
import CV from '../../assets/ts_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>My CV</a>
        <a href='#contact' className='btn btn-primary'>Wanna talk?</a>
    </div>
  )
}

export default CTA