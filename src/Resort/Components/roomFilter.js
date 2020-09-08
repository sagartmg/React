
import React from 'react';
import ReactDOM from 'react-dom';
import RoomList from './roomList';
import {useContext } from 'react'
import {RoomContext } from '../roomContext'
// import {useForm} from 'react-hook-form';
import { useForm } from "react-hook-form";

// to get the unique room titles
const unique = (items,value)=>{
	return [...new Set(items.map(item=> item[value]))];
	// take room items and for each rooms return item.property. 
}


function Hook(){
	const {register, handleSubmit } = useForm();
}



export default function RoomFilter({room}){

const context = useContext(RoomContext);
console.log("context context is ",context)


const capacitydropdown = unique(room, "capacity")
// let mincap=
let drop = capacitydropdown.map(elelment=>{
	return <option>
	{elelment}
	</option>
})


	// console.log("RoomFilter",room);
	console.log('context as ',context)
	let uniqueRooms = unique(room,"type");
	let allRooms =["all",...uniqueRooms];
	console.log("uniqueRooms",allRooms);
	let allroom = allRooms.map((elelment,index)=>{
		return <option key={index}>
		{elelment}
		</option>
	})
	console.log("allroom is list map",allroom)


	return(
		<>
		room filter
		<form>
		<select onChange={console.log('changed')}>

			{allroom}

		</select>

		<select>
		 {drop}
		</select>

		<input type="text" placeholder = "type anythings"/>
		<input type="submit"/>

		</form>
		</>
		)
}