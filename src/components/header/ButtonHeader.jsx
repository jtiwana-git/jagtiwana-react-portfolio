import React from 'react'
import CV from "../../asset/portfolio/JagdeepTiwanaCV.pdf"


const ButtonHeader = () => {
  return (
    <div className='ButtonHeader'>
        {/* <a href='{file} download'>Download CV</a> */}
        <a href={CV} className='btn' download>Download CV</a> 
        <a href='#contact' className='btn btn-primary' >Contact Me</a>

    </div>
  )
}

export default ButtonHeader
