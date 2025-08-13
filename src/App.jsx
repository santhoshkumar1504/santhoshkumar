import About from './Components/About'
import Certificate from './Components/Certificate'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


function App() {

  return (
    <>
    <div className='portfolio-container'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
