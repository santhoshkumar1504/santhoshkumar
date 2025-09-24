
import { FaHtml5 } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";

import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb, SiMysql, SiPostman, SiGit, SiFigma, SiC, SiCplusplus } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


// import mongodb from '../assets/mongodb.png'
// import mysql from '../assets/certificate/mysql.png'
// import postman from '../assets/postman-icon.png'

// import vscode from '../assets/vscode.png'
// import git from '../assets/git.png'
// import github from '../assets/github-sign.png'
// import figma from '../assets/certificate/figma.png'
// import c from '../assets/c.png'
// import cplusplus from '../assets/cplusplus.png'

import '../Stylesheets/skillStyle.css'


const Skills = () => {

  return (
    <div className='skill-container'>
          <div id='skills'></div>
          <h2 className='text-center head'>Skills</h2>
          <div className="row skill-row">

             <div className="col-md-12 col-lg-4 skill-col">
              <div className="skill-box">
                   <div className='skill-head d-flex'>
                    <div className='skill-svg'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/></svg>
                    </div>
                    <div className='ms-1'>Frontend Technologies</div>
                    </div> 
                <div className='skill-set'>
                  <FaHtml5 className="skill-icon" style={{color:"#E34F26"}}/>
                  <DiCss3 className="skill-icon" style={{color:"#1572B6"}}/>
                  <DiJsBadge className="skill-icon" style={{color:"#F7DF1E"}} />
                    <DiReact className="skill-icon" style={{color:"#61DAFB"}}/>
                  <DiBootstrap className="skill-icon" style={{color:"#7952B3"}}/>
                
          </div>

              <p className='skill-para'>Html5, Css3, Javascript, React JS, Bootstrap5</p>
             </div>
            </div>
          

             <div className="col-md-12 col-lg-3 skill-col">
              <div className="skill-box">
                 <div className='skill-head d-flex'>
                    <div className='skill-svg'>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 224C96 259.3 124.7 288 160 288L480 288C515.3 288 544 259.3 544 224L544 160C544 124.7 515.3 96 480 96L160 96zM376 168C389.3 168 400 178.7 400 192C400 205.3 389.3 216 376 216C362.7 216 352 205.3 352 192C352 178.7 362.7 168 376 168zM432 192C432 178.7 442.7 168 456 168C469.3 168 480 178.7 480 192C480 205.3 469.3 216 456 216C442.7 216 432 205.3 432 192zM160 352C124.7 352 96 380.7 96 416L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 416C544 380.7 515.3 352 480 352L160 352zM376 424C389.3 424 400 434.7 400 448C400 461.3 389.3 472 376 472C362.7 472 352 461.3 352 448C352 434.7 362.7 424 376 424zM432 448C432 434.7 442.7 424 456 424C469.3 424 480 434.7 480 448C480 461.3 469.3 472 456 472C442.7 472 432 461.3 432 448z"/></svg>
                    </div>
                    <div className='ms-1'>Backend Technologies</div>
                    </div> 
                <div className='skill-set'>
                  <DiPython className="skill-icon" style={{color:"#3776AB"}}/>
                  <DiJava className="skill-icon" style={{color:"#ED8B00"}}/>
              <DiNodejsSmall className="skill-icon" style={{color:"#339933"}}/>
              <SiExpress className="skill-icon" style={{color:"#FFF"}}/>
                <SiC className="skill-icon" style={{color:"#A8B9CC"}}/>
                <SiCplusplus className="skill-icon" style={{color:"#00599C"}}/>

          </div>

          <p className='skill-para'>Python, Java, NodeJS, ExpressJs, C, C++</p>
             </div>
            </div>

            <div className="col-md-12 col-lg-3 skill-col">
              <div className="skill-box">
                 <div className='skill-head d-flex'>
                    <div className='skill-svg'>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M544 269.8C529.2 279.6 512.2 287.5 494.5 293.8C447.5 310.6 385.8 320 320 320C254.2 320 192.4 310.5 145.5 293.8C127.9 287.5 110.8 279.6 96 269.8L96 352C96 396.2 196.3 432 320 432C443.7 432 544 396.2 544 352L544 269.8zM544 192L544 144C544 99.8 443.7 64 320 64C196.3 64 96 99.8 96 144L96 192C96 236.2 196.3 272 320 272C443.7 272 544 236.2 544 192zM494.5 453.8C447.6 470.5 385.9 480 320 480C254.1 480 192.4 470.5 145.5 453.8C127.9 447.5 110.8 439.6 96 429.8L96 496C96 540.2 196.3 576 320 576C443.7 576 544 540.2 544 496L544 429.8C529.2 439.6 512.2 447.5 494.5 453.8z"/></svg>
                    </div>
                    <div className='ms-1'>Database</div>
                    </div> 
                <div className='skill-set'>
                  <SiMongodb className="skill-icon" style={{color:"#47A248"}}/>
                  <SiMysql className="skill-icon" style={{color:"#F29111"}}/>
             
          </div>


          <p className='skill-para'>MongoDB, MySQL</p>
             </div>
            </div>

           </div>

           <h4 className='text-center my-3 mt-5 skill-tool'>Tools Used</h4>

          <div className="row">
            <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
              <div className="tool-col tool ">
                < SiPostman className="skill-icon" style={{color:"#FF6C37"}}/>
                <SiGit className="skill-icon" style={{color:"#F05032"}}/>
                <SiFigma className="skill-icon" style={{color:"#A259FF"}}/>
                <BiLogoVisualStudio className="skill-icon" style={{color:"#007ACC"}}/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Skills