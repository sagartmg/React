import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar,NavbarBrand } from 'reactstrap'



export default function Navigation(){
	return(
		<div>
			<Navbar  extend='sm'>
				<NavbarBrand href="/home">home</NavbarBrand>
			
				<NavbarBrand href="/menu">Menu</NavbarBrand>
			
				<NavbarBrand href="/component">Component</NavbarBrand>
			
			</Navbar>
		</div>)
}