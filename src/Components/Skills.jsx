import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import mysql from '../assets/certificate/mysql.png'
import node from '../assets/nodejs.png'
import python from '../assets/python.png'
import java from '../assets/java.png'
import bootstrap from '../assets/bootstrap.png'
import vscode from '../assets/vscode.png'
import git from '../assets/git.png'
import github from '../assets/github-sign.png'

import '../Stylesheets/skillStyle.css'
import Skillset from './Skillset'

const Skills = () => {

  return (
    <div className='skill-container'>
          <h2 className='text-center head'>Skills</h2>
          <div className="row skill-row">

             <div className="col-md-12 col-lg-3 skill-col">
              <div className="skill-box">
                  {/* <h3 className=''>Frontend Technologies</h3> */}
                <div className='skill-set'>
                  <Skillset imgsrc={html}/>
          <Skillset imgsrc={css}/>
          <Skillset imgsrc={js}/>
          <Skillset imgsrc={react}/>
          <Skillset imgsrc={bootstrap}/>
          </div>
             </div>
            </div>
          

             <div className="col-md-12 col-lg-3 skill-col">
              <div className="skill-box">
                <div className='skill-set'>
          <Skillset imgsrc={python}/>
          <Skillset imgsrc={java}/>
          </div>
             </div>
            </div>

            <div className="col-md-12 col-lg-3 skill-col">
              <div className="skill-box">
                <div className='skill-set'>
              <Skillset imgsrc={mysql}/>  
          </div>
             </div>
            </div>

           </div>

           

    </div>
  )
}

export default Skills