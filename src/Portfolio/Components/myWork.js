import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';

import programmer from '../Images/programmer1.jfif';

import '../Css/my_work.css'
import {Helmet} from "react-helmet";
import homejs from '../Js/home.js'
import {PortfolioContext} from '../contentfulDataRetrival'
import styled from 'styled-components';

const PortfolioItems = styled.div`

	
`



export default function MyWork(){
	const {response} = useContext(PortfolioContext);
	console.log(response);
	let response_mapping = response.map((element)=>{
		return <div className="each_portfolio" key={element.sys.id}>
		<img className="portfolio_image" src={element.fields.snapshotOfWebsite[0].fields.file.url}/>
		<p>{element.fields.nameOfWebsite}
		</p>
		</div>

	})
	
				return(
		<>
		
		
		<div >
		MyWork
		</div>
		<div className="portfolios_container">

			{response_mapping}
		</div>

		
		


		
	
		</>

		)

}



