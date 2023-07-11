import React from 'react'
import './cssnav.css'
import {ImHome} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav]=useState('#accueil')
  return (
    <nav>
      <a href="#accueil" onClick={()=> setActiveNav('#accueil')} className={activeNav === "#accueil" ? 'active':''}><ImHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active':''}><FaUser/></a>
      <a href="#experiences" onClick={()=> setActiveNav('#experiences')} className={activeNav === "#experiences" ? 'active':''}><BsFillJournalBookmarkFill/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === "#services" ? 'active':''}><RiServiceFill/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active':''}><BsFillChatLeftDotsFill/></a>
    </nav>
  )
}

export default Nav