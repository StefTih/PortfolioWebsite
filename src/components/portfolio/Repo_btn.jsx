import React from 'react'
import './portfolio.css'

const Repo_btn = (props) => {
  return (
    <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={props.photo} alt=""/>
          </div>
            <h3>{props.name}</h3>
          <div className='portfolio__item-cta'>
            <a href={props.gitRepo} className='btn' target="_blank">Git Repo</a>
            <a href={props.demo} className="btn btn-primary" target="_blank">Live Demo</a> 
          </div>
        </article>
  )
}

export default Repo_btn