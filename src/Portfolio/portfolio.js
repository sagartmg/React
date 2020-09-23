import React,{component}from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/home'
import Resume from './Components/resume'
import Project from './Components/project'
import Contact from './Components/contact'



import Homec from './Components/homec'
import MyWork from './Components/myWork'


import Navbar from './Components/navbar'
import {ContentfulDataRetrival} from './contentfulDataRetrival'
import { MdArrowUpward } from 'react-icons/md';





import './Css/styles.css'


export default function Portfolio(){
	return(

		<>
	{/* Switch and Routes...*/}
	<ContentfulDataRetrival>
	<Navbar/>
	<Home/>
	<Resume/>
	<Project/>
	<Contact/>

	
	</ContentfulDataRetrival>
	
	<div className="to_top_none">
		   <MdArrowUpward/>

		</div>
	
		
		</>

		)

}



