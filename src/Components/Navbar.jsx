import { useState } from 'react';
import '../Stylesheets/navStyle.css'

const Navbar = () => {

  const [isopen,setOpen]=useState(false);
  const [isclose,setClose]=useState(false);
  const handler=()=>{
  
    setOpen(!isopen);
      setClose(!isclose);
  }
  const handleClick=()=>{
    setClose(!isclose);
    setOpen(!isopen);
  }

  return (
        <div className='sticky-top bg-dark'>
      
        <nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <div>
        <a className="navbar-brand" href="#home">Santhosh</a>
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handler}>
      
      {isopen ? <i className="bi bi-x-lg p-2 fs-4"></i>: <i className="bi bi-list p-2 fs-4"></i> }
      
    </button>
    <div className={isclose ? "d-md-block collapse navbar-collapse ":"collapse navbar-collapse d-md-none"} id="navbarNav">

      <ul className="navbar-nav ms-auto">
        <a href="#home">
                <li className="navbar-item" onClick={handleClick}>
                    Home
                </li>
        </a>
        <a href="#about">
                <li className="navbar-item" onClick={handleClick}>
                     About Me
                </li>
        </a>
        <a href="#skills">
                <li className="navbar-item" onClick={handleClick}>
                    Skills
                </li>
        </a>
        <a href="#projects">
                <li className="navbar-item" onClick={handleClick}>
                    Projects
                </li>
        </a>
        
        <a href="#contact">
                <li className="navbar-item" onClick={handleClick}>
                   Contact
                </li>
        </a>
             </ul>


    </div>
</div>
</nav>
    </div>
  )
}

export default Navbar