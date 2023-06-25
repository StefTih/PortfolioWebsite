import React from 'react'
import './experience.css'
import {DiReact} from 'react-icons/di'
import { REACT,JS,ANDROID,PYTHON, JAVA, KOTLIN, CPP, SCALA, MySQL, POSTGREESQL, FIGMA, FIREBASE, PRISMA, SPRINGBOOT, MOCKITO, DJANGO, KAFKA,DOCKER, PANDAS, SCIKIT_LEARN, XTEXT, INTELIJ_ULTIMATE, VS_CODE, ECLIPSE, ANDROID_STUDIO, VERSION_CONTROL, TRELLO } from '../../assets/constants'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillAndroid} from 'react-icons/ai'
import {DiPython,DiJava,DiPostgresql,DiEclipse} from 'react-icons/di'
import {SiKotlin,SiCplusplus,SiScala,
        SiPrisma,SiFirebase,SiSpringboot,
        SiDjango,SiApachekafka,SiPandas,
        SiScikitlearn,SiIntellijidea,SiAndroidstudio} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {FaFlask,FaDocker} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import {BsGithub,BsTrello} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What is my</h5>
      <h2>Tech Stack</h2>
      <div className='container experience__container'>

        {/* FRONTEND TECH */}
        <div className='experience__frontend'>
          <h3>Frontend Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <a href={REACT} target="_blank"><DiReact></DiReact> React</a>
            </article>
            <article className='experience__details'>
            <a href={JS} target="_blank"><IoLogoJavascript></IoLogoJavascript> JavaScript</a>
            </article>
            <article className='experience__details'>
            <a href={ANDROID} target="_blank"><AiFillAndroid></AiFillAndroid> Android Mobile App Development</a>
            </article>
          </div>
        </div>

        {/* BACKEND TECH */}
        <div className='experience__backend'>
          <h3>Backend Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <a href={PYTHON} target="_blank"><DiPython></DiPython> Python</a>
            </article>
            <article className='experience__details'>
              <a href={JAVA} target="_blank"><DiJava></DiJava> Java</a>
            </article>
            <article className='experience__details'>
              <a href={KOTLIN} target="_blank"><SiKotlin></SiKotlin> Kotlin</a>
            </article>
            <article className='experience__details'>
              <a href={CPP} target="_blank"><SiCplusplus></SiCplusplus> C++</a>
            </article>
            <article className='experience__details'>
              <a href={SCALA} target="_blank"><SiScala></SiScala> Scala</a>
            </article>
          </div>
        </div>

        {/* DB TECH */}
        <div className='experience__db'>
          <h3>DB Management Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <a href={MySQL} target="_blank"><GrMysql></GrMysql> MySQL</a>
            </article>
            <article className='experience__details'>
              <a href={POSTGREESQL} target="_blank"><DiPostgresql></DiPostgresql> Postgreesql</a>
            </article>
            <article className='experience__details'>
              <a href={FIREBASE} target="_blank"><SiFirebase></SiFirebase> Firebase</a>
            </article>
            <article className='experience__details'>
              <a href={PRISMA} target="_blank"><SiPrisma></SiPrisma> Prisma</a>
            </article>
          </div>
        </div>

        {/* Frameworks used */}
        <div className='experience__db'>
          <h3>Frameworks used</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <a href={SPRINGBOOT} target="_blank"><SiSpringboot></SiSpringboot> SpringBoot</a>
            </article>
            <article className='experience__details'>
              <a href={MOCKITO} target="_blank"><FaFlask></FaFlask> Mockito</a>
            </article>
            <article className='experience__details'>
              <a href={DJANGO} target="_blank"><SiDjango></SiDjango> Django</a>
            </article>
            <article className='experience__details'>
              <a href={KAFKA} target="_blank"><SiApachekafka></SiApachekafka> Kafka</a>
            </article>
            <article className='experience__details'>
              <a href={DOCKER} target="_blank"><FaDocker></FaDocker> Docker</a>
            </article>
            <article className='experience__details'>
              <a href={PANDAS} target="_blank"><SiPandas></SiPandas> Pandas</a>
            </article>
            <article className='experience__details'>
              <a href={SCIKIT_LEARN} target="_blank"><SiScikitlearn></SiScikitlearn> Scikit learn</a>
            </article>
            <article className='experience__details'>
              <a href={XTEXT} target="_blank"><DiEclipse></DiEclipse> Xtext</a>
            </article>
          </div>
        </div>

        {/* IDEs and Other tools used */}
        <div className='experience__db'>
          <h3>Support tools used</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <a href={INTELIJ_ULTIMATE} target="_blank"><SiIntellijidea></SiIntellijidea> Intelij Ultimate</a>
            </article>
            <article className='experience__details'>
              <a href={VS_CODE} target="_blank"><TbBrandVscode></TbBrandVscode> VS Code</a>
            </article>
            <article className='experience__details'>
              <a href={ECLIPSE} target="_blank"><DiEclipse></DiEclipse> Eclipse</a>
            </article>
            <article className='experience__details'>
              <a href={ANDROID_STUDIO} target="_blank"><SiAndroidstudio></SiAndroidstudio> Android Studio</a>
            </article>
            <article className='experience__details'>
              <a href={VERSION_CONTROL} target="_blank"><BsGithub></BsGithub> Git/Github version control</a>
            </article>
            <article className='experience__details'>
              <a href={TRELLO} target="_blank"><BsTrello></BsTrello> Trello</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience