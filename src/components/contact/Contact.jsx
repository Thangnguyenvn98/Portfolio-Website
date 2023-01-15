import './contact.css'
import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
import data from './data'




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
          {
            data.map(item =>
            <article key={item.id} className={item.articleClass}>{item.icon}
            <h4>{item.title}</h4>
            <h5>{item.description}</h5>
            <a href={item.link} download={item.downloads} rel={item.rel} target={item.target}>
            {item.message}</a>
            </article>)
          }
          
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