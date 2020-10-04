import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';

import { BsDownload } from 'react-icons/bs';

import '../Css/resume.css'
import resume_file  from "./CV_Sagar_Tamang.pdf";




export default function Resume(){
		useEffect(()=>{

			let resume_container_contents = document.querySelector(".resume_container_contents_inner1");
			resume_container_contents.style.borderBottom= "none";
			let resume_container_contents2 = document.querySelector(".resume_container_contents_inner2");
			resume_container_contents2.style.borderBottom= "none";
		});

		return(
		<>
		
		<div style={{textAlign:"center"}} className="resume_container_main title">
		Resume 
	</div>
		<div className="resume_container">
			<div className="resume_container_contents">
				<div className="resume_container_contents_inner1">
				Education
				</div>
				<div className="resume_container_contents_inner2">
					<p>2017 - 2020
					</p>
					Bachelor in BSc. (Hons) Computer Science
				</div>

			</div>

			<div className="resume_container_contents">
				<div className="resume_container_contents_inner1">
				Work
				</div>
				<div className="resume_container_contents_inner2">
				Although, no any work experience in organizations, did a lot of projects both group and individual in Artificial Intelligence, Big Data and many small self-projects
				</div>
			</div>
			<div>
				<a href={resume_file} download id="a_download">
				<button className="all_projects_btn download_btn"><BsDownload id="download_icon"/> Download Resume
				</button>
				</a>
			</div>
		</div>
	
		</>

		)

}



