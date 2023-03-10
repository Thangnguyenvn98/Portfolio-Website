import React from 'react'
import './header.css'
import HeaderImage from '../../assets/profile-picture.jpg'
import data from './data'
import {FiDownload} from 'react-icons/fi'
import Resume from '../../assets/Thang-Resume 2023.pdf'

interface HeaderItem{
  id: number,
  link: string,
  icon: JSX.Element
}

interface Props{}

const Header:React.FC<Props> = () => {
  return (
    <header id="header" >
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="" />
        </div>
        <h1>Thang Nguyen</h1>
        <p> 
       A hardworking and enthusiastic computer science student at Toronto Metropolitan University(Ryerson University). Currently seeking a co-op placement to gain real-world experience in my field of study. My website serves as a platform to showcase my previous experiences, projects, and interests, as well as to connect with industry professionals who share similar interests. Please feel free to reach out to me to discuss any potential co-op opportunities that align with my expertise and experience.</p>
        <div className ="header__btn">
          <a href={Resume} download="thangnguyen-resume" rel="noreferrer" target='_blank' className='btn'>Download Resume<FiDownload/></a>
          <a href="#portfolio" className ='btn white'>My Projects</a>
        </div>
        <div className="header__socials">
          {
            data.map((item:HeaderItem)=><a key={item.id}
              href={item.link} target='_blank' rel="noopener noreferrer">{item.icon}
            </a>)
          }

        </div>
      </div>
    </header>
  )
}

export default Header