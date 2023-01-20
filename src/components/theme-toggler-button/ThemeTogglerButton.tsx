import React from 'react'
import {useState, useEffect} from 'react'
import {FiSun, FiMoon} from 'react-icons/fi'
import './themetogglerbutton.css'

interface ThemeStyles {
  moon: {
      '--bg-color': string;
      '--container-color': string;
      '--heading-color': string;
      '--primary-button-color': string;
      '--secondary-button-color': string;
      '--offset-color': string;
      '--icon-color': string;
      '--button-text-color': string;
      '--text-color': string;
      '--portfolio-hover': string;
      '--container-heading-color': string;
      '--texts-color': string;
  };
  sun: {
      '--bg-color': string;
      '--container-color': string;
      '--heading-color': string;
      '--primary-button-color': string;
      '--secondary-button-color': string;
      '--offset-color': string;
      '--icon-color': string;
      '--button-text-color': string;
      '--text-color': string;
      '--portfolio-hover': string;
      '--container-heading-color': string;
      '--texts-color': string;
  };
}

const ThemeTogglerButton: React.FC = () => {
  const [icon, setIcon] = useState<'moon' | 'sun'>('sun');

  useEffect(() => {
      const themeStyles: ThemeStyles = {
          moon: {
              '--bg-color': '#283747',
              '--container-color': '#4b5d67',
              '--heading-color': '#F3F3F3',
              '--primary-button-color': '#3F3B6C',
              '--secondary-button-color': '#D8D8D8',
              '--offset-color': '#16123f',
              '--icon-color': '#A77979',
              '--button-text-color': 'white',
              '--text-color': '#F3F3F3',
              '--portfolio-hover': '#615c84',
              '--container-heading-color': '#A5C9CA',
              '--texts-color': 'black'
          },
          sun: {
              '--bg-color': '#F3F3F3',
              '--container-color': '#ffd8b9',
              '--heading-color': '#283747',
              '--primary-button-color': '#ffa8B6',
              '--secondary-button-color': '#c7ddcc',
              '--offset-color': '#B1CAE9',
              '--icon-color': '#abd699',
              '--button-text-color': 'white',
              '--text-color': 'black',
              '--portfolio-hover': '#615c84',
              '--container-heading-color': '#266150',
              '--texts-color': 'white'
  
        }
      };
      Object.entries(themeStyles[icon]).forEach(([variable, value]) => {
        document.documentElement.style.setProperty(variable, value);
      });
    }, [icon]);
  return (
    

    <button className = "theme__icon" onClick={() => setIcon(icon === 'moon' ? 'sun' : 'moon')}>{icon==='sun'?<FiMoon /> : <FiSun />}</button>
    )
}

export default ThemeTogglerButton