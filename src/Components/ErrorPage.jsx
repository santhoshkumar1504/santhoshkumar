import React from 'react'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    
     <div className="not-found-container">
      <h1>404</h1>
      <p className='text-light'>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go back home</Link>
    </div>
  )
}

export default ErrorPage
