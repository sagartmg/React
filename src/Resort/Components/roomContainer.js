import React from 'react';
import ReactDOM from 'react-dom';
import {RoomConsumer,WithRoomConsumer} from '../roomContext'
  function RoomContainer({context}){
	const {loading, sortedRooms, rooms} = context;
	console.log("loading again",loading)
	return (
			<div>
			hello from RoomagainContainer
			</div>)
}

export default WithRoomConsumer(RoomContainer)