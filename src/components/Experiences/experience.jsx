import React from 'react'
import './cssexperience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>Mes compétences</h5>
      <h2>Mon Expérience</h2>
      <div className="container experience_container">
        
        <div className="experience_frontend">
          <h3>Développement front-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="light-text">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="light-text">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className="light-text">Moyen</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="light-text">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className="light-text">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>C, C++</h4>
                <small className="light-text">Intermédiaire</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="experience_backend">
        <h3>Développement back-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="light-text">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
             <div>
              <h4>Node.JS </h4>
              <small className="light-text">Intermédiaire</small>
             </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="light-text">Moyen</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>C/C++</h4>
                <small className="light-text">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <BiSolidBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="light-text">Expérimenté</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience