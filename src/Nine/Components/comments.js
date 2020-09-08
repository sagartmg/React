import React, {Component} from 'react'
import ReactDOM from 'react-dom';


import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {DISHES} from '../Shared/dishes'


export default function Comments(props){
	console.log(props.obj.id)
	const mapping = props.obj.comments.map(elelement=>{
		return(
		<>
			<h6>{elelement.id}</h6>
			<p>{elelement.comment}</p>
		</>
		);
	})
	return(
		<>
		{mapping}
		</>
		);
}