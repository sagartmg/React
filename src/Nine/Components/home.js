import React,{Component,useContext} from 'react';
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
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {DISHES} from '../Shared/dishes'
import {CrochetContext} from '../contentfulDataRetrival'


function show(props){

  console.log('show')
  return(
    <div>
    hello hel pme
    </div>
    );
}


export default function Home(){
  alert("")
  const crochet_context =useContext(CrochetContext)
  console.log("hhhhhhhhhhhh",crochet_context)


  console.log(DISHES);
  const mapping = DISHES.map(element=>{
    const imgsrc =element.image;
    console.log("imggsrc",imgsrc)
    return(
    <div className="bg-dark" onClick={show}>
    {element.name}
    </div>
    )
  })
  return(
			<div>
      HOme
      {mapping}
      {show()}
    </div>
		)
}