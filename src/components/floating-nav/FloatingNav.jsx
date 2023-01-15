import React, { useState } from 'react'
import './floatingnav.css'
import {AiOutlineHome, AiOutlineMessage} from 'react-icons/ai'
import {FaLayerGroup} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import ThemeTogglerButton from '../theme-toggler-button/ThemeTogglerButton'


const FloatingNav = () => {
  const [activeNav,setActiveNav] = useState('#')
  
  return (
    <nav role="sub" >
        <a href='/#' onClick={()  => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaLayerGroup/></a>
        <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><MdWorkOutline/></a>
        <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><AiOutlineMessage/></a>
        <a href='#footer' onClick={()  => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active':''}><BsGlobe/></a>
        <ThemeTogglerButton/>
    </nav>
  )
}

export default FloatingNav