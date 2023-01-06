import React from 'react'
import './navbar.css'
import Logo from '../../assets/avatar1.jpg'
import data from './data'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
                <img src={Logo} alt="My Logo Picture" />
            </a>
            <ul className = 'nav__menu'>
                {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar