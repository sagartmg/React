import React,{useEffect,useContext,useState}from 'react';
import ReactDOM from 'react-dom';
import {PortfolioContext} from '../contentfulDataRetrival'
import {Link} from 'react-router-dom'


import '../Css/project.css'




export default function Project(){
	const {response} = useContext(PortfolioContext);
	const [allProjects ,setAllProjects] = useState(false);
	var featured=[];
	if(response.length>1){



		 featured = response.filter(feature_element =>{
			return feature_element.fields.featured 
		}

		)
	}
	let to_be_mapped =[];
	{allProjects? to_be_mapped=response: to_be_mapped=featured};
	const projects_mapping = to_be_mapped.map(element=>{
		return( <div key={element.sys.id} className="each_projects">
					<Link to={{ pathname: element.fields.urlOfWebsite }} target="_blank" >
					<img className="each_projects_image" src={element.fields.snapshotOfWebsite[0].fields.file.url}/>
					</Link>
					
					<p style={{textAlign:"center"}}>{element.fields.nameOfWebsite}	</p>

					</div>);
	})
	function showAllProjects(){
		setAllProjects(!allProjects)

      
        let contacts_top = document.querySelector(".projects_").offsetTop;
        window.scrollTo({top:contacts_top})

          
          
      


	}

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
				<div className="all_projects">
				<button className="all_projects_btn" onClick={showAllProjects}>
				{allProjects? "Show Featured": "Show All"}

				</button>
			</div>

			</div>
			
	</div>
		</>
		)

}



