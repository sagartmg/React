import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';
import {PortfolioContext} from '../contentfulDataRetrival'
import {Link} from 'react-router-dom'


import '../Css/project.css'




export default function Project(){
	const {response} = useContext(PortfolioContext);

	const projects_mapping = response.map(element=>{
		return( <div key={element.sys.id} className="each_projects">
					<Link to={{ pathname: element.fields.urlOfWebsite }} target="_blank" >
					<img className="each_projects_image" src={element.fields.snapshotOfWebsite[0].fields.file.url}/>
					</Link>
					
					<p style={{textAlign:"center"}}>{element.fields.nameOfWebsite}	</p>

					</div>);
	}) 
	console.log(response,"projects")
	return(
		<>
		<div className="projects_ ">
				<p style={{textAlign:"center"}} className="projects_container_main title"> Projects
				</p>
			<div className="projects_container">
			
				<div className="each_projects_container">
					{projects_mapping}

				</div>
			</div>
	</div>
		</>
		)

}



