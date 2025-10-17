import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
const First = () => {
  return (
    <div>
      <div className='portfolio-container'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default First
