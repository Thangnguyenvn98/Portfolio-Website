import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsSignal} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'



interface Props{}

const Footer:React.FC<Props> = () => {
  return (
    <footer id='footer'>
      <a href="/#" className='footer__logo'>Thang Nguyen</a>
      <ul className='permalinks'>
        <li><a href="https://linkedin.com"><BsLinkedin/></a></li>
        <li><a href="https://github.com"><BsGithub/></a></li>
        <li><a href="https://instagram.com"><BsInstagram/></a></li>
        <li><a href="https://discord.com"><BsDiscord/></a></li>

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