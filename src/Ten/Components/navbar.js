import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';




export default function JJ(){
	return(
			<div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" >reactstrap</NavbarBrand>
        <NavbarBrand href="/components" className="mr-auto bg-success">reactstrap</NavbarBrand>
        <NavbarBrand href="/menu" className="mr-auto bg-success">reactstrap</NavbarBrand>
       
         
        
      </Navbar>
    </div>
		)
}