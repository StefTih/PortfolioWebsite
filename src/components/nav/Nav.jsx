import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {SlNotebook} from 'react-icons/sl'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <BiHomeAlt2/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUser/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <SlNotebook/> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <RiServiceFill/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageRoundedDetail/> </a>
   </nav>
  )
}

export default Nav