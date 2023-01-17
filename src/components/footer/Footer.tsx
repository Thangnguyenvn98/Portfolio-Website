import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsSignal} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import data from '../header/data'



interface Props{}

const Footer:React.FC<Props> = () => {
  return (
    <footer id='footer'>
      <a href="/#" className='footer__logo'>Thang Nguyen</a>
      <ul className='permalinks'>
        {
          data.map(item=>(
            <li><a key ={item.id} href={item.link} target='_blank' rel="noopener noreferrer">{item.icon}</a></li>
          ))
        }
     

      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/KAk4sh1/" target='_blank' rel='noreferrer'><BsFacebook/></a>
        <a href="https://imgur.com/j7UTTxJ" title="source: imgur.com" target='_blank' rel='noreferrer'><BsSignal/></a>

        <a href="https://imgur.com/l20BJoy" title="source: imgur.com" target='_blank' rel='noreferrer'><BsWhatsapp/></a>

      </div>
      <div className="footer_copyright">
        <small>&copy; Thang Nguyen. All rights reserved 2023.</small>
      </div>
    </footer>
  )
}

export default Footer