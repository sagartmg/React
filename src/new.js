import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Components/navigation'
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Switch} from 'react-router-dom'
import Menu from './Components/menu'
import Menuu from './Components/Menuu'






 export default class New extends React.Component{
	render(){
		return(
			<>
			<Navigation/>
			<Switch>
		<Route  exact path="/" component={Menu}/>
		<Route  exact path="/components" component={Menuu}/>

		<Route exact  path="/room/:slug" component={Menu}/>
		<Route  component={Menuu}/>
		</Switch>
		</>
			)
			
	}
}