import React from 'react'
import './floatingnav.css'
import {AiOutlineHome, AiOutlineMessage} from 'react-icons/ai'
import {FaLayerGroup} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import { useState, useEffect } from 'react';
import {FiSun, FiMoon} from 'react-icons/fi'


const FloatingNav = () => {
  const [activeNav,setActiveNav] = useState('#')
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
    <nav role="sub" >
        <a href='/#' onClick={()  => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaLayerGroup/></a>
        <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><MdWorkOutline/></a>
        <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><AiOutlineMessage/></a>
        <a href='#footer' onClick={()  => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active':''}><BsGlobe/></a>
        <button className = "theme__icon" onClick={() => setIcon(icon === 'sun' ? 'moon' : 'sun')}>{icon==='sun'?<FiSun /> : <FiMoon />}</button>
    </nav>
  )
}

export default FloatingNav