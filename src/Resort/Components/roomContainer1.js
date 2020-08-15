import React from 'react';
import ReactDOM from 'react-dom';
import {RoomConsumer,WithRoomConsumer} from '../roomContext'


// roomContainer part 1
export default function RoomContainer(){
	return(
		<RoomConsumer>

{
	(value)=>{
		const {loading, sortedRooms, rooms} = value;
		return (
			<div>
			hello from RoomContainer
			</div>)
	}
}
	</RoomConsumer>
		)

}