import React from 'react'
import './header.css'
import HeaderImage from '../../assets/profile-picture.jpg'
import data from './data'
import {FiDownload} from 'react-icons/fi'
import Resume from '../../assets/Thang-Resume 2022.pdf'

const Header = () => {
  return (
    <header id="header" >
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Portrait Photo" />
        </div>
        <h1>Thang Nguyen</h1>
        <p> 
        Hi there! My name is Thang, first year computer science student at Toronto Metropolitan University&#40;Ryerson University&#41;. I am passionate about Blockchain technologies and interesting in full-stack software. This is mine portfolio website.
        </p>
        <div className ="header__btn">
          <a href={Resume} download="thang_nguyen-resume" className='btn'>Download Resume<FiDownload/></a>
          <a href="#portfolio" className ='btn white'>My Project</a>
        </div>
        <div className="header__socials">
          {
            data.map(item=><a key={item.id}
              href={item.link} target='_blank' rel="noopener no referrer">{item.icon}
            </a>)
          }

        </div>
      </div>
    </header>
  )
}

export default Header