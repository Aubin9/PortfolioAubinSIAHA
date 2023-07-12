import React from 'react'
import './cssabout.css'
import MOI from '../../assets/templates/moi.jpg'

import {GiGiftOfKnowledge} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Faire connaissance</h5>
      <h2>A propos de moi</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={MOI} alt="Sur moi" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Client</h5>
              <small>empty</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Projets</h5>
              <small>5+ complets</small>
            </article>

            <article className='about_card'>
              <GiGiftOfKnowledge className='about_icon'/>
              <h5>Experiences</h5>
              <small>3+ months internship</small>
            </article>
          </div>
          <p>
            Je poursuis actuellement mes études au niveau bachelor's degree en computer engineering a FET (Faculty of Engineering and Technology
            ) option software engineer a l'université de Buea. Jeune Camerounais bilingue en français et en anglais, je suis tellement reconnaissant 
            de faire partir de ce domaine passionnant d'ingénierie en informatique et je souhaite être d'une utilité importante et remarquable dans 
            la société dans ce rôle la de pouvoir identifier les problèmes dans la société en et
            aussi être capable de proposer des solutions, c'est une question d'organisation et de travail. <br /><br />
            <strong>Let's stay focused</strong>
          </p>
          <a href="#contact" className='btn btnPrimary'>m'ecrire</a>
        </div>
      </div>
    </section>
  )
}

export default About