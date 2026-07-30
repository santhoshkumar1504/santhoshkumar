import '../Stylesheets/projectStyle.css'
import weather from '../assets/weather.png'
import restapi from '../assets/restapi.png'
import ProjectBox from './ProjectBox'
import movie from '../assets/movieapp.jpeg'
import ecommerce from '../assets/ecommerce.png'
import projectimg from '../assets/project .png';
import flight from '../assets/flight.jpg'
import shopsphere from '../assets/shopsphere.png'
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom'

const Projects = () => {


  const projectData = [
    {
      "pid": 1001,
      "projectimage": shopsphere,
      "projecttitle": "Shop Sphere - Ecommerce Web Application ( Django )",
      "projectdesc": "A Django-based e-commerce application with product listing, search, cart, checkout, and order management.",
      "github": "https://github.com/santhoshkumar1504/shopshere",
      "website": "https://shopshere-l0d0.onrender.com/"
    },
    {
      "pid": 1006,
      "projectimage": flight,
      "projecttitle": "Flight Ticket Booking Website ( Django )",
      "projectdesc": "A Django-based flight booking application with flight search, ticket booking, and booking management.",
      "github": "https://github.com/santhoshkumar1504/Flight-Ticket-Booking-Website-Django",
    },
    {
      "pid": 1004,
      "projectimage": movie,
      "projecttitle": "MovieHub App",
      "projectdesc": "MovieHub is a React app that lets you discover movies and TV shows using the TMDB API. explore trending content, and view detailed information in a responsive UI.",
      "github": "https://github.com/santhoshkumar1504/moviehub",
      "website": "https://moviehub-flame.vercel.app/"
    }
    ,

  ]

  return (
    <div className='project-container'>
      <div id="projects"></div>
      <h2 className='text-center head'>Projects</h2>

      <div className="row project-row">
        {projectData.map((item, index) => (

          <ProjectBox key={index} file={item.projectimage || projectimg} projecttitle={item.projecttitle} projectdesc={item.projectdesc} github={item.github} website={item.website} />

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