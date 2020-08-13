import React,{Component} from 'react';
	import ReactDOM from 'react-dom';
import defaultimg from "../images/room-1.jpeg";
import propTypes from 'prop-types'




export default function Room({room}){
	console.log("room",room);

	const{name, slug, image, price} = room;
	return(
		<article className = "feautred-images">

			<img className="fimages" src={image[0] || defaultimg} alt = "slugs"/>
			

		</article>

		)

}