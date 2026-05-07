import '../Stylesheets/projectStyle.css'
import weather from '../assets/weather.png'
import restapi from '../assets/restapi.png'
import ProjectBox from './ProjectBox'
import movie from '../assets/movieapp.jpeg'
import ecommerce from '../assets/ecommerce.png'
import projectimg from '../assets/project .png';
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom'

const Projects = () => {


  const projectData=[
    {
              "pid":1007,
               "projectimage":ecommerce,
              "projecttitle":"Ecommerce Project (MERN)",
              "projectdesc":"Developed a scalable full-stack e-commerce application using the MERN stack with secure authentication, product and category management, and complete CRUD functionality.",
              "github":"https://github.com/santhoshkumar1504/ecommerce-website-MERN",
     },
     {
           "pid":1006,
           "projectimage":restapi,
          "projecttitle":"Rest API",
          "projectdesc":"A lightweight and scalable Node.js REST API that handles user signup/login, email verification, file uploads, and CRUD operations with JWT-based security.",
          "github":"https://github.com/santhoshkumar1504/rest-api",
        },
    {
      "pid":1004,
      "projectimage":movie,
      "projecttitle":"MovieHub App",
      "projectdesc":"MovieHub is a React app that lets you discover movies and TV shows using the TMDB API. explore trending content, and view detailed information in a responsive UI.",
      "github":"https://github.com/santhoshkumar1504/moviehub",
      "website":"https://moviehub-flame.vercel.app/"
    }
  ]  

  return (
    <div className='project-container'>
        <div id="projects"></div>
        <h2 className='text-center head'>Projects</h2>
        
        <div className="row project-row">
          {projectData.map((item,index)=>(
            
              <ProjectBox key={index} file={item.projectimage || projectimg} projecttitle={item.projecttitle} projectdesc={item.projectdesc} github={item.github} website={item.website}/>

          ))}
        
        </div>
        <div className='text-center my-3 mt-4'>
<Link to={'/projects'}><button className="btn cbutton"><MdOutlineExpandMore />
Show More</button></Link>

        </div>
           
       
    </div>
  )
}

export default Projects