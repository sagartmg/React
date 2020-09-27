import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';


import '../Css/resume.css'




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
				education
				</div>
				<div className="resume_container_contents_inner2">
					<p>2017 - 2020
					</p>
					Bachelor in CS
				</div>

			</div>

			<div className="resume_container_contents">
				<div className="resume_container_contents_inner1">
				work
				</div>
				<div className="resume_container_contents_inner2">
				Although, no any work experience in organizations, did a lot of projects both group and individual in Artificial Intelligence, Big Data
				</div>
			</div>
		</div>
	
		</>

		)

}



