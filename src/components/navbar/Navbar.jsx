import React from 'react'
import './navbar.css'
import Logo from '../../assets/portrait-photo.jpeg'
import data from './data'
import ThemeTogglerButton from '../theme-toggler-button/ThemeTogglerButton'


const Navbar = () => {

  
  
  return (
    
    <nav id="navbar" role='main'>
        <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
                <img src={Logo} alt="" />
            </a>
            <ul className = 'nav__menu'>
                {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                }
            </ul>
            <ThemeTogglerButton/>
        </div>
    </nav>
    
  )
}

export default Navbar