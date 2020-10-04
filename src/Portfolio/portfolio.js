import React,{component}from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/home'
import Resume from './Components/resume'
import Project from './Components/project'
import Contact from './Components/contact'



import Homec from './Components/homec'
import MyWork from './Components/myWork'


import Navbar from './Components/navbar'
import Footer from './Components/footer'

import {ContentfulDataRetrival} from './contentfulDataRetrival'
import { MdArrowUpward } from 'react-icons/md';
import {Switch, Route,Redirect} from 'react-router-dom'; 
import AllProjects from './Components/allprojects';
import LandingPage from './Components/landingPage'




import './Css/styles.css'


export default function Portfolio(){
	return(

		<>
	{/* Switch and Routes...*/}
	<ContentfulDataRetrival>

	<Switch>
	<Route  exact path="/" component={LandingPage}/>
	<Route exact path="/projects/all" component={AllProjects}/>
	<Redirect to="/"/>
	
	</Switch>

	
	</ContentfulDataRetrival>
	
	<div className="to_top_none">
		   <MdArrowUpward/>

		</div>
	
		
		</>

		)

}



