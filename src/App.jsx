import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
function App() {

  return (
    <>
    <div className='portfolio-container'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Footer/>
      </div>
    </>
  )
}

export default App
