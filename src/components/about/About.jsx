import React from 'react'
import './about.css'
import ME from '../../asset/portfolio/Basketball.png'

const About = () => {
  return (
    <section id='about'>
      <h5>About ME</h5>
    
    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />

       </div>
      </div>

      <div className="about__content">
        <p>I am a junior web designer in the coding world, I love to learn new IT skills. I am interested in gaming, football, box sets/movies, long scenic drives and basketball, where I play for a local team in a national league. My background that I have worked for the local authority for the 22 years, I am known in my team as the “go to” IT guy. As I have designed and created spreadsheets for the team and our suppliers to use. I am reliable, hard working and 'Mr Dependable'. </p>
        </div>

        


    
      </div> 




    </section>
  )
}

export default About
