import React from 'react'
import './about.css'
import IMAGE from '../../assets/my_about_image.jpg'
import {MdWorkHistory,MdOutlineInterests} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'
import { KCL,DREAMIX,AMEX,INTRA,KCL_TA } from '../../assets/constants'
import About_Me_Info from './About_Me_Info'

const About = () => {
  return (
    <section id='about'>
      <h5>A little bit</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        {/* Image */}
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={IMAGE} alt="About Image" />
          </div>
        </div>
        
        {/* Cards */}
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>Education</h5>
              <small>
                <a href={KCL} target="_blank">University of King's College London</a><br/>
                Bsc in Computer Sciecnce with Software Engineering
              </small>
            </article>

            <article className='about__card'>
              <MdWorkHistory className='about__icon'/>
              <h5>Work Experience</h5>
              <small>
                <ul className="bullet-list">
                  <li><a href={DREAMIX} target="_blank">Dreamix Bulgaria</a></li>
                  <li><a href={AMEX} target="_blank">American Express UK branch</a></li>
                  <li><a href={INTRA} target="_blank">Intrapreneuers club</a></li>
                  <li><a href={KCL_TA} target="_blank">Teaching Assistant at Kings College London</a></li>
                </ul>
              </small>
            </article>

            <article className='about__card'>
              <MdOutlineInterests className='about__icon'/>
              <h5>Interests</h5>
              <small>
                <ul className='bullet-list'>
                  <li>Motorsports</li>
                  <li>Football</li>
                  <li>Hackathons and Networking Events</li>
                  <li>Home and Gym Workout</li>
                </ul>
              </small>
            </article>
          </div>

          <div>
            <About_Me_Info/>
          </div>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About