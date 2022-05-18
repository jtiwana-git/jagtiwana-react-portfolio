import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/jagdeep-tiwana-02954a226/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/jtiwana-git' target="_blank"><BsGithub/></a>
     
    </div>
  )
}

export default HeaderSocials
