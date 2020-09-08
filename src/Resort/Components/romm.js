import React,{Component} from 'react';
	import ReactDOM from 'react-dom';
import defaultimg from "../images/room-1.jpeg";
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';




export default function Room({room,getroom}){
	console.log("room",room);
	console.log("getrrom",getroom)

	const{name, slug, image, price} = room;
	console.log('sl',slug)


	return(
		<article className = "feautred-images">
		


			<img className="fimages" src={image[0] || defaultimg} alt = "slugs"/>
			
		
		<Link to={`/room/${slug}`}>
		<button>
		single page{slug}


		</button>	
		</Link>	
		</article>

		)

}