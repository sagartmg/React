import React from 'react';
import ReactDOM from 'react-dom';
import Room from './romm';

export default function RoomList({room}){

	console.log("RoomList, rooms ",room)

	
	if(room.length!==0){
		// alert('room zero');
	
	 let max = Math.max(...room.map(element=>{
	 	console.log(element.price)
	 	return element.price;
	 }));
	 
	return(
		<section>
		{room.map(element=>{
			return <Room key={element.id} room={element}/>
		})}

		</section>
		)
	}
	console.log('null right now')
	return(<>
	null right now
	</>)
}