import React from 'react'
import './footer.css'
import {BsFacebook, BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import TishImage from '../../assets/tish_logo-removebg-preview.png'



const Footer = () => {
  return (
    <footer>
      <div className='footer__image'>
        <a href='#'>
          <img  src={TishImage} alt="My Image"  />
        </a>
      </div>


      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    <div className='footer__socials'>
      <a href='https://facebook.com'><BsFacebook/></a>
      <a href='https://instagram.com'><BsInstagram/></a>
      <a href='https://whatsapp.com'><BsWhatsapp/></a>
      <a href='https://linkedin.com'><AiFillLinkedin/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Tihomir Stefanov. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer