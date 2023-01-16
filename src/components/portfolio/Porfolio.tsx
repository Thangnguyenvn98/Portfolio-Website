import React from 'react'
import './portfolio.css'
import data from './data'

interface Props {}
interface PortfolioItem{
  id:number,
  image: any,
  title: string,
  github: string,
  demo: string
}
const Porfolio: React.FC<Props> = () => {
  return (
    <section id="portfolio">
      <h5>My Portfolio</h5>
      <h2>Projects</h2>
    
    <div className="container portfolio__container">
      {
        data.map((item: PortfolioItem)=>{
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className = "portfolio__item-title">
              <h3>{item.title}</h3>
              </div>
              <div className="portfolio__item-button">
                <a href={item.github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={item.demo} className='btn white' target='_blank' rel='noreferrer'>Live Demo</a>
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