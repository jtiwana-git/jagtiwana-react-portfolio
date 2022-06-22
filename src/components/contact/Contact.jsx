import React from 'react'
import './contact.css'
import {AiFillGithub} from 'react-icons/ai'
import {SiLinkedin, SiSlack} from 'react-icons/si'
import {MdOutlineMail} from 'react-icons/md'


const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact__headers'>
     <h2>Contact Me</h2>
       <h6>jtiwana@hotmail.com</h6>
       </div>
     <div className='contact_icon'>
   <a href='https://github.com/jtiwana-git'><AiFillGithub className='contact_icon'/></a>
   <a href='https://www.linkedin.com/in/jagdeep-tiwana-02954a226/'><SiLinkedin className='contact_icon'/></a>
   <a href='https://slack.com/app_redirect?app=U02P8MD2SHE'><SiSlack className='contact_icon'/></a>
   <a href='mailto:jtiwana@hotmail.com' ><MdOutlineMail className='contact_icon'/></a>
   </div>
    </section>
  )
    
}

export default Contact
