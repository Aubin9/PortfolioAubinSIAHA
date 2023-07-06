import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Navigation/nav'
import About from './components/About/about'
import Experiences from './components/Experiences/experience'
import Services from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonial from './components/Testimonial/testimonial'
import Contact from './components/Contacts/contact'
import Footer from './components/Footer/footer'


const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App