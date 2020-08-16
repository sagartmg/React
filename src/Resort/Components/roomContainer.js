import React from 'react';
import ReactDOM from 'react-dom';
import RoomList from './roomList';
import RoomFilter from './roomFilter';

import {RoomConsumer,WithRoomConsumer} from '../roomContext'
 function RoomContainer({context}){
	const {loading, sortedRooms, room} = context;
	// console.log("context",context)
	console.log("loading again",room)
	return (
			<div>
			<RoomFilter room={room}/>
			</div>)
}

export default WithRoomConsumer(RoomContainer);

