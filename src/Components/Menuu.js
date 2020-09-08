import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron, Container
} from 'reactstrap'


export default class Menuu extends React.Component{
	constructor(props){
		super(props);
		this.state={
			obj:props
		}
		this.showDescription = this.showDescription.bind(this)
	}
	showDescription(){
		return(
			<div>
			show showDescription
			</div>)
	}
	render(){
		
		return(
		<div>
		menuu
		</div>)
		}

}