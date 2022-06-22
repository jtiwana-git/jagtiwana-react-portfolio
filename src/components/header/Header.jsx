import React from 'react'
import './header.css'
import ButtonHeader from './ButtonHeader'
import ME from '../../asset/portfolio/updateProfile.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Jagdeep Tiwana</h1>
        <h5 className="text-light">Junior Web Developer</h5>
        <ButtonHeader />

         <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
