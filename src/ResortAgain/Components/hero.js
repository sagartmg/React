import React from 'react'
import ReactDOM from 'react-dom'
import {RoomContext} from './context'


export default class Hero extends React.Component{


	static contextType= RoomContext;

	render(){
		console.log("contexxxxxxx",this.context)
		let data = this.context;
		console.log('data',data)
		// const{filtered:ft} = data;
		// console.log('ft',ft)
		// let froom = ft.map(element=>{
		// 	return(
		// 		<article key ={element.id}>
		// 			<h6>{element.name}</h6>

		// 			<img src = {element.image[0]}/>
		// 		</article>)
		// })



		return(
			<>
			inside hereo.
			
			</>
			)
		}
	}
