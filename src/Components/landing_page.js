import React from 'react';
import '../Styles/landing_page.css'
import {Link} from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
    <div className="container">
    	<div className="give_get_container">
	    	<Link to="/get" className="Link">
	    		<div className="getblood">
	    		<h1 className="align_center">Get Blood</h1>
	    		<p>find potential blood donors near you. </p>

	    	</div>
	    	</Link>
	    	<Link to="/give" className="Link">
	    	<div className="giveblood">
	    		<h1 className="align_center">Give Blood</h1>
	    		<p>regester your details so that people in need can contact you.</p>

	    	</div>
	    	</Link>
    	</div>
    </div>
    </>
  );
}

