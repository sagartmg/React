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
		console.log("room",room)
		// room.map(elm)
		
	if(room != undefined){
		console.log("single",room)
		const [main, ...remainingImg]=room.image;
		console.log(main);
		console.log(remainingImg);

		let remain = remainingImg.map((element,index)=>{
			return(
					<img key={index} src={element} width="200" height="200"/>
				)
		})


	return(
		<>
		
		{room.name}
		<img src={main}/>
		{remain}

		</>
		)
	}
	else{
		return(
		<div>
		room not ye t
		</div>)
	}
	}
}