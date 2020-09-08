import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Components/navbar'
import {Route, Switch,Redirect} from 'react-router-dom'
import Home from './Components/home'
import Menu from './Components/menu'
import Single from './Components/single'





export default function ResortAgain(){
	return(

		<>
		<Switch>
		<Route exact path='/' component={Home}/>
		<Route exact path='/menu' component={Menu}/>
		<Route exact path='/menu/:slug' component={Single}/>

		<Redirect to='/'/>


		</Switch>

		</>
		)
}