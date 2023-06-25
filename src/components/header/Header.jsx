import React from 'react'
import './header.css'
import CTA from './CTA'
import MyImage from '../../assets/my_image.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello my name is</h5>
        <h1>Tihomir Stefanov</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <div className='my_image'>
          <img src={MyImage} alt="my_imag" />
        </div>
        <HeaderSocials/>
        <a href='#contact' className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header