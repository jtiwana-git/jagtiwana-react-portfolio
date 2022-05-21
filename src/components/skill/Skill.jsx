import React from 'react'
import './skill.css'
import {AiOutlineCheckSquare} from 'react-icons/ai'

const skill = () => {
  return (
    <section id='skill'>
      <h2>My SKILLS</h2>

      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
               <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>Tailwind</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>React</h4>
              </div>
              </article>
          </div>
        </div>
        <div className="skill__backend">
        <h3>Backend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>Node.js</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>MySQL</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
              <AiOutlineCheckSquare className='skill_details-icon'/>
              <div>
              <h4>NoSQL</h4>
              </div>
              </article>
          </div>

        </div>

      </div>
    </section>
    )
}

export default skill
