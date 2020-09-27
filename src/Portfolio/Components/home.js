import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';

import programmer from '../Images/programmer3.jpg';
import background from '../Images/background.jpg';


import '../Css/home.css'
import {Helmet} from "react-helmet";
import homejs from '../Js/home.js'
import {PortfolioContext} from '../contentfulDataRetrival'




export default function Home(){
	const contentful_data = useContext(PortfolioContext);
	console.log(contentful_data.response);

	
{/* 

	useEffect(() => {
    document.title = `You clicked  times`;
    var dd = document.querySelector(".navbar");
    // alert(dd);
    console.log("dd",dd)
    var navbarh = dd.getBoundingClientRect().height;
    let banner = document.querySelector("#banner_image");
    banner.style.marginTop=`${navbarh}px`; 
 	 });
	


	var navbar = document.querySelector(".navbar");

 */}
 


				return(
		<>
		
		<div className="banner_container">
		
			<div className="banner">
				<img id="banner_image" src={programmer}/>
				<div className="banner_contents">
					<p id="sagar">Sagar Tamang</p>
					<p> I design and develop things, that ease the lives of other.</p> 
				</div>
			</div>
			

			
		</div>
		
		


		
	
		</>

		)

}



