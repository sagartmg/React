import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './Components/home'
import SingleRoom from './Components/singleRoom'

import Room from './Components/room'
import Error from './Components/error'
import Navbar from './Components/navbar'
import Exapample from './Components/hook'




export default function Resort(){
	return(
		<>
		<Switch>
		<Route exact path='/' component={Home}/>
		<Route exact path='/form' component={Exapample}/>

		<Route exact path='/room' component={Room}/>

		<Route exact path='/room/:slug' component={SingleRoom}/>
		<Route component={Error}/>


		</Switch>
		</>

		)

} 