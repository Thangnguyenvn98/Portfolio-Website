import React from 'react'
import './portfolio.css'
import data from './data'

const Porfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Portfolio</h5>
      <h2>Projects</h2>
    
    <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-button">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn white' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Porfolio