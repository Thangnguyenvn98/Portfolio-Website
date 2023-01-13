import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillFilePdf} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
import Resume from '../../assets/Thang-Resume 2023.pdf'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smu5gv8', 'template_2c0s61g', form.current, 'dRpWGmibyMooG9Wwr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Let's Connect</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className = "contact__option-icon"/>
            <h4>Email</h4>
            <h5>thangnguyenvn647@gmail.com</h5>
            <a href="mailto:thangnguyenvn647@gmail.com" rel="noreferrer" target='_blank'> Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillFilePdf className = "contact__option-icon"/>
            <h4>Resume</h4>
            <h5>Thang Nguyen</h5>
            <a href={Resume} download="thang_nguyen-resume" rel="noreferrer"target='_blank'> Click to Download</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact