import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/navbar'
import Compo from './Components/components'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/home'
import Menu from './Components/menu'




export default function Nine(){
	return(
		<>
		<Navbar/>
		<Switch>
		<Route  exact path="/" component={Home}/>
		<Route  exact path="/components" component={Compo}/>

		<Route exact  path="/menu" component={Menu}/>
		<Route  component={Compo}/>
		</Switch>

		</>
)}