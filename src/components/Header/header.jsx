import React from 'react'
import './cssheader.css'
import Mon_CV from '../../assets/templates/Mon_CV.pdf'
import MOI from '../../assets/templates/ma_pp.jpg'

import {AiFillLinkedin} from 'react-icons/ai'
import {ImYoutube} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'

const Header = () => {
  return (
    <header id='accueil'>
        <div className="container header_container">
        <h5>Salut, Je suis</h5>
        <h1>Aubin SIAHA</h1>
        <h5 className="light-text">Devellopeur full stack <br />Gestionnaire des bases de donnees</h5>
        
        {/*Pour telecharger le CV et contact*/}
        <div className="contacter">
          <a href={Mon_CV} download className='btn'>Telecharger mon CV</a>
          <a href="#contact" className='btn btnPrimary'>m'ecrire</a>
        </div>

        {/*Inserer ma photo de profil*/}
      <div className="MOI">
        <img src={MOI} alt="me voici" />
      </div>

      {/*Scroller vers le bas*/}
      <a href="#contact" className='scroll'>Aller en bas</a>
      </div>

      {/*Les iconnes des reseaux sociaux*/}
      <div className="reseaux_sociaux">
        <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer"><AiFillLinkedin/></a>
        <a href="https://youtube.com" target='blank' rel='noopener noreferrer'><ImYoutube/></a>
        <a href="https://github.com" target='_blank' rel="noopener noreferrer"><ImGithub/></a>
        <a href="https://twitter.com" target='_blank' rel="noopener noreferrer"><ImTwitter/></a>
      </div>
    </header>
  )
}

export default Header