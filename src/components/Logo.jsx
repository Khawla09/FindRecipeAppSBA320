import React from 'react'
import { Link } from 'react-router-dom';
import { SiIfood } from "react-icons/si";

function Logo() {
    
   
  return (
    <div  className='logo-container'>
        <h1 className='h1-logo' ><Link to={'/'}><SiIfood /> Find Your Recipe </Link></h1>
    </div>
  )
}

export default Logo