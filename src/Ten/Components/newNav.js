import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar,NavbarBrand,NavbarToggler, Collapse,Nav, NavLink,NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'



export default class NewNav extends Component{
	constructor(){
		super()
		this.state={
			isOpen:false,
		}
		this.toggleNow = this.toggleNow.bind(this)
	}

	toggleNow(){
		this.setState({isOpen: !this.state.isOpen});
	}

	render(){
		return(
		<div>
		<Navbar  expand="xl">
			<div className="container">
			<NavbarToggler   onClick={this.toggleNow}>toggle</NavbarToggler>
			<NavbarBrand>
				<Link to="/components">compo</Link>
			</NavbarBrand>
			<NavbarBrand>
				<Link to="/components">compo</Link>
			</NavbarBrand><NavbarBrand>
				<Link to="/components">compo</Link>
			</NavbarBrand>	
			<Collapse isOpen={this.state.isOpen}>
			<Nav>hello
			</Nav>
			<Nav>hello
			</Nav>
			<Nav>hello
			</Nav>
			
			
			</Collapse>

			</div>		

		</Navbar>
		</div>
		)
		}
}