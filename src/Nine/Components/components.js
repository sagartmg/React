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
import {DISHES} from '../Shared/dishes'

import New from './new'





export default class Compo extends Component{
  constructor(){
    super()
    this.state={
      showing:false
    }
  }

  componentDidMount(){
    console.log(DISHES);
    const map = 'hello people'
  

  }

  show(){
    
      return(
        <div>
        <h1>elemen</h1>
        elment.id
        </div>)

  }
  showw(){
    const mapping=DISHES.map(elment=>{
      return(
      <div key={elment.id}>
      element
      <img src={elment.image} /> 
      </div>
      )
    });
    return(
    <div className="bg-dark" onClick={this.disp}>
    {mapping}
    </div>)
      

  }
  disp(){
    console.log('display description')
    
  }


  render(){
    return(
    <div>
    <New/>
    
    compoents class
    {this.mapping}
    {this.map}
    {this.show()}
    {this.showw()}



    </div>)
  }
}

