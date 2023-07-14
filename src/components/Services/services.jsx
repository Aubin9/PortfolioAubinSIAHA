import React from 'react'
import './cssservices.css'
import {FaServicestack} from 'react-icons/fa'

const services = () => {
  return (
    <section id='services'>
      <h5>Ce que j'offre</h5>
      <h2>Mes Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Education</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>apprendre les mathématiques au secondaire</p>
            </li>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>Assistances aux difficultés liées au domaine informatique</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Develloppement web</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>Créer un portfolio </p>
            </li>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>créer une page web simple</p>
            </li>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>Dévelloper une application locale (Java & SQL)</p>
            </li>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>front-end, backend</p>
            </li>
          </ul>
        </article>

      <article className="service">
          <div className="service_head">
            <h3>Programmation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaServicestack className='service_list-icon'/>
              <p>coder en languages de programmation</p>
            </li>
          </ul>
      </article>
      
      </div>
    </section>

    
  )
}

export default services