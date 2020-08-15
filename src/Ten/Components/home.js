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
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {DISHES} from '../Shared/dishes'
import Convert from './convert'



  const dish=undefined;
  const naming = "sagar"


const adventurer = {
  name: 'Alice',
  catt: {
    name: ["sgar","chija"]
  }
};

console.log(adventurer.cat?.name || "nope")

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

export default function Home(){
  console.log("dishes as ",DISHES)

  const filtering = DISHES.filter(elment=>elment.id==0)
  console.log("filtering",filtering)
  takeOj(filtering);
 
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
      <Convert obj={{
        name:'sagar',
        func:(element)=>console.log('hemp'),
        anoth :ano
      
      }
      }  onClicck={showww}/>
      filtering now:{filtering[0]['name']}
      <HomeF  objPar={filtering[0]}/>
      <Dummy/>


    </div>
		)
}
function Dummy(){
  return(
  <div>
  dummy
  {dish?naming:"nothing" }

  </div>
  )
}
function show(props){
  console.log('show')
  return(
    <div>
    hello hel pme
    </div>
    );
}
function showww(props){
  console.log('showing')
  return(
    <div>
    hello hel pme
    </div>
    );
}

function takeOj(object){
  console.log('takeOj',object)

}
function HomeF({objPar}){
  console.log("homef",objPar)
  console.log('this is home function')
  return(
  <div>
  HomeF
  {objPar.name}

  </div>
  )
}

const ano=()=>console.log('anotther in home ')
const anuu=()=>console.log('anuu in home ')



