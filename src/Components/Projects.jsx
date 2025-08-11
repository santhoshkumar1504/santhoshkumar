import '../Stylesheets/projectStyle.css'
import weather from '../assets/weather.png'
import portfolio from '../assets/portfolio-project.png'
import currency from '../assets/currency.png'
import ProjectBox from './ProjectBox'

const Projects = () => {


  const projectData=[
     {
      "pid":1001,
      "projectimage":portfolio,
      "projecttitle":"Personal Portfolio",
      "projectdesc":"A responsive personal portfolio website built with React to showcase projects, skills, and contact information, featuring smooth navigation and a clean, modern design.",
      "github":"https://github.com/santhoshkumar1504/santhoshkumar",
      "website":""
    },
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
    }
  ]  

  return (
    <div className='project-container'>
        <div id="projects"></div>
        <h2 className='text-center head'>Projects</h2>
        
        <div className="row project-row">
          {projectData.map((item,index)=>(
            
              <ProjectBox key={index} file={item.projectimage} projecttitle={item.projecttitle} projectdesc={item.projectdesc} github={item.github} website={item.website}/>

          ))}
        
        </div>
       
    </div>
  )
}

export default Projects