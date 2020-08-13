import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/navbar'
import Compo from './Components/components'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/home'
import Menu from './Components/menu'
import NewNav from './Components/newNav'
import Cour from './Components/cour'





export default function Ten(){


	return(
		<>
		<Navbar/>
		<NewNav/>
		<Cour/>
		<Switch>
		<Route  exact path="/" component={Home}/>
		<Route  exact path="/components" component={seend}/>

		<Route exact  path="/menu" component={()=> <Menu obj={{name:12}}/>}/>
		<Route  component={Compo}/>
		</Switch>

		</>
)}
	function seend(){
		return (
			<div>
			<Compo value={1111111111}/>
			</div>)
		
	}