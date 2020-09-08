import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Hero from './hero'
import {MenuProvider} from './context'
import {RoomContext} from './context'
import FunctionalHero from './functionalHero'


export default class Home extends Component{

	render(){
	// alert(this.context);


		return(
			<div>
			<MenuProvider>
			feautred rooms
			<Hero/>
			<FunctionalHero/>
			</MenuProvider>
			</div>
			)
	}
}