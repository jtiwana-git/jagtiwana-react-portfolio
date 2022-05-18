import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {SiLinkedin, SiSlack} from 'react-icons/si'

const Footer = () => {
  return (
    <footer id='footer'>
   
   
   <div className='footer__socials'>
   <a href='https://github.com/jtiwana-git'><AiFillGithub className='footer__socials-icon'/></a>
   <a href='https://www.linkedin.com/in/jagdeep-tiwana-02954a226/'><SiLinkedin className='footer__socials-icon'/></a>
   <a href='https://slack.com/app_redirect?app=U02P8MD2SHE'><SiSlack className='footer__socials-icon'/></a>
   
   </div>
  </footer>
  )
}


export default Footer
