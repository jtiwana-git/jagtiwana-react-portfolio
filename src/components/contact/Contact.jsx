import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
     <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact options">
        <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>jtiwana@hotmail.com</h5>
          <a href='mailto:jtiwana@hotmail.com' target='_blank' rel="noreferrer"> Send a message</a>
        </article>
        <article className='contact__option'>
          <FaWhatsappSquare className='contact__option-icon'/>
          <h4>WhatsApp NOT WORKING</h4>
          <a href='https://wa.me/447949480188' target='_blank' rel="noreferrer"> Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form action="">
      <input type='text' name='name' placeholder='Name' required /> 
      <input type='email' name='email' placeholder='Email' required /> 
      <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>

    </div>


    </section>
  )
}

export default Contact
