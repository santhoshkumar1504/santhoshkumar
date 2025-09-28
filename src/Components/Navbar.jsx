import { useState } from 'react';
import '../Stylesheets/navStyle.css'

const Navbar = () => {

  const [isopen,setOpen]=useState(false);
  const handler=()=>{
    setOpen(!isopen);
  }

  return (
        <div className='sticky-top'>
      
        <nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <div>
        <a className="navbar-brand" href="#home">Santhosh</a>
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handler}>
      {isopen ? <i className="bi bi-x-lg text-light p-2"></i>: <i className="bi bi-list text-light p-2"></i> }
      
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ms-auto">
        <a href="#home">
                <li className="navbar-item">
                    Home
                </li>
        </a>
        <a href="#about">
                <li className="navbar-item">
                     About Me
                </li>
        </a>
        <a href="#skills">
                <li className="navbar-item">
                    Skills
                </li>
        </a>
        <a href="#projects">
                <li className="navbar-item">
                    Projects
                </li>
        </a>
        <a href="#certificates">
                <li className="navbar-item">
                    Certificates
                </li>
        </a>
        <a href="#contact">
                <li className="navbar-item">
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