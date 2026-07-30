import React from 'react'
import '../Stylesheets/projectStyle.css'
import restapi from '../assets/restapi.png'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import ecommerce from '../assets/ecommerce.png'
import weather from '../assets/weather.png'
import shopsphere from '../assets/shopsphere.png'
import currency from '../assets/currency.png'
import ProjectBox from './ProjectBox'
import movie from '../assets/movieapp.jpeg'
import flight from '../assets/flight.jpg'
import projectimg from '../assets/project .png';
import { Link } from 'react-router-dom'



const AllProject = () => {
  // Developed a full-stack MERN e-commerce application with secure authentication, CRUD operations, and Razorpay payment integration. Implemented voice-based navigation using Web Speech API to enable hands-free interaction and improve user experience.
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
          "pid":1001,
          "projectimage":shopsphere,
          "projecttitle":"Shop Sphere - Ecommerce Web Application ( Django )",
          "projectdesc":"A Django-based e-commerce application with product listing, search, cart, checkout, and order management.",
          "github":"https://github.com/santhoshkumar1504/shopshere",
          "website":"https://shopshere-l0d0.onrender.com/"
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
          "projectimage":flight,
          "projecttitle":"Flight Ticket Booking Website ( Django )",
          "projectdesc":"A Django-based flight booking application with flight search, ticket booking, and booking management.",
          "github":"https://github.com/santhoshkumar1504/Flight-Ticket-Booking-Website-Django",
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
        },
        
      ]  

  return (
    <div className='project-container'>
        <div id="projects"></div>
        <Link to={'/'} className='text-decoration-none text-light'><button className='btn cbutton'><IoArrowBackCircleSharp className='me-1'/>Back to Home</button></Link>
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
