import React from 'react'
import './portfolio.css'
import { BACKSTREETCYCLES, UTILEM_BACKEND, UTILEM_FRONTEND, CHESS_MANAGEMENT_CLUB, DISSERTATION } from '../../assets/constants'
import BackstreetImage from '../../assets/backstreetCycles.png'
import UtilemImage from '../../assets/utilem_image.jpeg'
import ChessManagementImage from '../../assets/chess_management_system.png'
import EvaluatingMLmodels from '../../assets/evaluating_ml_models.png'
import Repo_btn from './Repo_btn'
import Dissertation from '../../assets/evaluating_machine_learning_models_for_football_predictions_report.pdf'

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

        <Repo_btn photo={EvaluatingMLmodels} 
                  gitRepo={DISSERTATION} 
                  demo={Dissertation}
                  name={"Evaluating Machine Learning models for Football Predictions"}/>
      </div>

    </section>
  )
}

export default Portfolio