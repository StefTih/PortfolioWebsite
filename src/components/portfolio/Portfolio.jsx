import React from 'react'
import './portfolio.css'
import { BACKSTREETCYCLES, UTILEM_BACKEND, UTILEM_FRONTEND, CHESS_MANAGEMENT_CLUB } from '../../assets/constants'
import BackstreetImage from '../../assets/backstreetCycles.png'
import UtilemImage from '../../assets/utilem_image.jpeg'
import ChessManagementImage from '../../assets/chess_management_system.png'
import Repo_btn from './Repo_btn'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My most up to date</h5>
      <h2>Projects</h2>

      <div className='"container portfolio__container'>
        <Repo_btn photo={BackstreetImage} 
                  gitRepo={BACKSTREETCYCLES} 
                  demo={BACKSTREETCYCLES}
                  name={"Backstreet Cycles App"}/>
        
        <Repo_btn photo={UtilemImage} 
                  gitRepo={UTILEM_FRONTEND} 
                  demo={UTILEM_BACKEND}
                  name={"Utilem"}/>

        <Repo_btn photo={ChessManagementImage} 
                  gitRepo={CHESS_MANAGEMENT_CLUB} 
                  demo={CHESS_MANAGEMENT_CLUB}
                  name={"Chess Management Club"}/>
      </div>

    </section>
  )
}

export default Portfolio