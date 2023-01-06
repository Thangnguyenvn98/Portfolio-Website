import React from 'react'
import './floatingnav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaLayerGroup} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsGlobe} from 'react-icons/bs'
import { useState } from 'react';

const FloatingNav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav className='floating-nav'>
        <a href='/#' onClick={()  => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaLayerGroup/></a>
        <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><MdWorkOutline/></a>
        <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><AiOutlineMessage/></a>
        <a href='#footer' onClick={()  => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active':''}><BsGlobe/></a>
    </nav>
  )
}

export default FloatingNav