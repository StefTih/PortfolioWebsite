import React from 'react'
import { LINKEDIN, GITHUB } from '../../assets/constants'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href={LINKEDIN} target="_blank">
            <BsLinkedin/>
        </a>
        <a href={GITHUB} target="_blank">
            <BsGithub/>
        </a>
    </div>
  )
}

export default HeaderSocials