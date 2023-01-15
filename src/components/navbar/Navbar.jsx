import React, { useState, useEffect } from 'react'
import './navbar.css'
import Logo from '../../assets/portrait-photo.jpeg'
import data from './data'
import {FiSun, FiMoon} from 'react-icons/fi'


const Navbar = () => {

  const [icon, setIcon] = useState('moon');

  useEffect(() => {
    const themeStyles = {
      sun: {
        '--bg-color': '#283747',
        '--container-color': '#4b5d67',
        '--heading-color': '#F3F3F3',
        '--primary-button-color': '#3F3B6C',
        '--secondary-button-color': '#D8D8D8',
        '--offset-color': '#16123f',
        '--icon-color': '#A77979',
        '--button-text-color': 'white',
        '--text-color': '#F3F3F3',
        '--portfolio-hover': '#fcd200',
        '--container-heading-color': '#A5C9CA'
      },
      moon: {
        '--bg-color': '#F3F3F3',
        '--container-color': '#75c9b7',
        '--heading-color': '#283747',
        '--primary-button-color': '#ffa8B6',
        '--secondary-button-color': '#c7ddcc',
        '--offset-color': '#F0D6FA',
        '--icon-color': '#abd699',
        '--button-text-color': 'black',
        '--text-color': 'black',
        '--portfolio-hover': '#fcd200',
        '--container-heading-color': '#266150'
      }
    };
    Object.entries(themeStyles[icon]).forEach(([variable, value]) => {
      document.documentElement.style.setProperty(variable, value);
    });
  }, [icon]);
  
  return (
    
    <nav role='main'>
        <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
                <img src={Logo} alt="" />
            </a>
            <ul className = 'nav__menu'>
                {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                }
            </ul>
            <button className = "theme__icon" onClick={() => setIcon(icon === 'sun' ? 'moon' : 'sun')}>{icon==='sun'?<FiSun /> : <FiMoon />}</button>
        </div>
    </nav>
    
  )
}

export default Navbar