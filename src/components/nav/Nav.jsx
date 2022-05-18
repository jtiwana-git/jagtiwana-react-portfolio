import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {SiAboutdotme, SiSkillshare} from 'react-icons/si'
import {AiFillProject, AiTwotoneMessage} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href='#skill' onClick={() => setActiveNav ('#skill')} className={activeNav === '#skill' ? 'active' : ''}><SiSkillshare/></a>
      <a href='#project' onClick={() => setActiveNav ('#project')} className={activeNav === '#project' ? 'active' : ''}><AiFillProject/></a>
      <a href='#contact' onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiTwotoneMessage/></a>
   

    </nav>
  )
}


export default Nav
