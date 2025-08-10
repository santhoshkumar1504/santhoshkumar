import '../Stylesheets/projectStyle.css'
import weather from '../assets/weather.png'
import currency from '../assets/currency.png'
import ProjectBox from './ProjectBox'

const Projects = () => {


  const projectData=[
    {
      "pid":1002,
      "projectimage":weather,
      "projecttitle":"Weather App",
      "projectdesc":"ReactJs | Weather API",
      "github":"hhhhhhh",
      "website":"https://weather-app-chi-lilac-43.vercel.app/"
    },
    {
      "pid":1003,
      "projectimage":currency,
      "projecttitle":"Currency Convertor",
      "projectdesc":"ReactJs | API",
      "github":"hhhhhddddhh",
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