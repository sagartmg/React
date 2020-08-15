import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {RoomContext } from '../roomContext'



export default class SingleRoom extends Component{
	constructor(props){
		super(props)
		this.state={
			slug:props.match.params.slug

		}
	}
	static contextType = RoomContext;

	

	render(){
		const{getroom} = this.context;
		const room = getroom(this.state.slug);
		// room.map(elm)
		console.log("single",room)
	if(room != undefined)


	return(
		<>
		R
		{room.name}
		<img src={room.image[0]}/>
		</>
		)
	else{
		return(
		<div>
		room not ye t
		</div>)
	}
	}
}