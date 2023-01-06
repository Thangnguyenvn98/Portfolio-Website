import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>HTML</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>CSS</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>JavaScript</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>React</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Back End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>Python</h4>
              <small className="text-black">Intermediate</small></div>
              
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>Java</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>MySQL</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>TypeScript</h4>
              <small className="text-black">Intermediate</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Experience