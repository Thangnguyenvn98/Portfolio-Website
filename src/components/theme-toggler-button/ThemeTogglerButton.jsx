import React from 'react'
import {useState, useEffect} from 'react'
import {FiSun, FiMoon} from 'react-icons/fi'
import './themetogglerbutton.css'

const ThemeTogglerButton = () => {
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
          '--container-heading-color': '#A5C9CA',
          '--texts-color': 'white'
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
          '--container-heading-color': '#266150',
          '--texts-color': 'black'
  
        }
      };
      Object.entries(themeStyles[icon]).forEach(([variable, value]) => {
        document.documentElement.style.setProperty(variable, value);
      });
    }, [icon]);
  return (
    
    <button className = "theme__icon" onClick={() => setIcon(icon === 'sun' ? 'moon' : 'sun')}>{icon==='sun'?<FiSun /> : <FiMoon />}</button>
    )
}

export default ThemeTogglerButton