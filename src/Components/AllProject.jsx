import React from 'react'
import '../Stylesheets/projectStyle.css'
import { IoArrowBackCircleSharp } from "react-icons/io5";

import weather from '../assets/weather.png'
import portfolio from '../assets/portfolio-project.png'
import currency from '../assets/currency.png'
import ProjectBox from './ProjectBox'
import movie from '../assets/movieapp.jpeg'
import projectimg from '../assets/project .png';
import { Link } from 'react-router-dom'

const AllProject = () => {
      const projectData=[
         {
          "pid":1001,
          "projectimage":portfolio,
          "projecttitle":"Personal Portfolio",
          "projectdesc":"A responsive personal portfolio website built with React to showcase projects, skills, and contact information, featuring smooth navigation and a clean, modern design.",
          "github":"https://github.com/santhoshkumar1504/santhoshkumar",
          "website":"https://santhoshkumar-one.vercel.app/"
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
          "pid":1006,
          "projecttitle":"Simple Todo",
          "projectdesc":"To-Do app built with Node.js, Express.js, MongoDB, and EJS. It allows users to add, view, and delete tasks through a simple and clean web interface.",
          "github":"https://github.com/santhoshkumar1504/todo-app",
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
        },
        {
          "pid":1005,
          "projecttitle":"Project Management System",
          "projectdesc":"A backend system built with Node.js and MongoDB to manage projects and tasks Provides robust CRUD APIs for creating, reading, updating, and deleting data.",
          "github":"https://github.com/santhoshkumar1504/task-management",
        }
      ]  

  return (
    <div className='project-container'>
        <div id="projects"></div>
        <button className='btn cbutton'><Link to={'/'} className='text-decoration-none text-light'><IoArrowBackCircleSharp className='me-1'/>Back to Home</Link></button>
        <h2 className='text-center head'>Projects</h2>
        
        <div className="row project-row">
          {projectData.map((item,index)=>(
            
              <ProjectBox key={index} file={item.projectimage || projectimg} projecttitle={item.projecttitle} projectdesc={item.projectdesc} github={item.github} website={item.website}/>

          ))}
        
        </div>
       
    </div>
  )
}

export default AllProject
