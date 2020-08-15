import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Hero from './hero'
import MenuProvider from './context'
import {RoomContext} from './context'



export default class Home extends Component{

	render(){
	// alert(this.context);


		return(
			<div>
			feautred rooms
			<Hero/>
			</div>
			)
	}
}