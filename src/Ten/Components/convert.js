import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {DISHES} from '../Shared/dishes'


export default function Convert(props){
	
	return(
		<div>
		
		{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse( "2012-10-16T17:57:28.556094Z" )))}

		</div>)
}