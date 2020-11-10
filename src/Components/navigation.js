import React from 'react';
import '../Styles/landing_page.css'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <>
   	<div className="navigation" >
   	<div className="nav_inner">
   		<Link className="nav_links" to="/" style={{textDecoration:"none"}}>Dashboard </Link>
   		
   		<Link className="nav_links" to="/signup" style={{textDecoration:"none"}}>signup </Link>
   		<Link className="nav_links" to="/login" style={{textDecoration:"none"}}>login </Link>


   		</div>
   </div>

    </>
  )
}

