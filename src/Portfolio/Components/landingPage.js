import React,{component}from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import Resume from './resume'
import Project from './project'
import Contact from './contact'



import Homec from './homec'
import MyWork from './myWork'


import Navbar from './navbar'
import Footer from './footer'

import {ContentfulDataRetrival} from '../contentfulDataRetrival'
import { MdArrowUpward } from 'react-icons/md';
import {Switch, Route} from 'react-router-dom'; 
import AllProjects from './allprojects'




import '../Css/styles.css'


export default function LandingPage(){
	return(

		<>
	<Navbar/>
	<Home/>
	<Resume/>
	<Project/>
	<Contact/>
	<Footer/>

	
	
	
		
		</>

		)

}



