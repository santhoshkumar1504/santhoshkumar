import '../Stylesheets/projectStyle.css'
import weather from '../assets/weather.png'
import portfolio from '../assets/portfolio-project.png'
import currency from '../assets/currency.png'
import ProjectBox from './ProjectBox'
import movie from '../assets/movieapp.jpeg'
import projectimg from '../assets/project .png';
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom'

const Projects = () => {


  const projectData=[
    
    {
      "pid":1002,
      "projectimage":weather,
      "projecttitle":"Weather App",
      "projectdesc":"A React-based weather app that fetches and displays real-time temperature, humidity, and wind speed for any city using a public Weather API.",
      "github":"https://github.com/santhoshkumar1504/weather-app",
      "website":"https://weather-app-chi-lilac-43.vercel.app/"
    },
    {
      "pid":1003,
      "projectimage":currency,
      "projecttitle":"Currency Convertor",
      "projectdesc":"A React-based currency converter that uses a public API to provide real-time exchange rates and convert amounts between different currencies.",
      "github":"https://github.com/santhoshkumar1504/currencyconvertor",
      "website":"https://currencyconvertor-ashy.vercel.app/"
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