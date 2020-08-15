import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { FaBeer } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import ULO from './ul-links'



export default class Navbar extends Component{
	constructor(){
		super();
		this.state={
		toggle:false,
	}
	this.buttonP = this.buttonP.bind(this)
	}
	buttonP(){
		this.setState({toggle:!this.state.toggle})
		console.log(this.state.toggle);
	}
	render(){
		return(
			<>
			<nav className="navbar">
				<div className ="navbar-items"> 
				<FaBeer/>
				</div>

				<div className = "navbar-items nav-link">
				<ULO/>
				
				
					

				</div>

				
				<button className = "btn-icon navbar-items" onClick={this.buttonP}>
				<FaBeer/>
				</button>
				
			
			</nav>
			<div className={this.state.toggle?"toggler":"noToggler"}>
			<ULO/>


			</div>
			</>
			)
	}
}