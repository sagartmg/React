import React from 'react'

import {Switch,Redirect,Route} from 'react-router-dom'
import App from './App'
import SignIn from './Components/signin'


export default function RouterSetup(){

	return(
			<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/signin" component={SignIn}/>
			<Redirect to="/"/>

			</Switch>
		)

}