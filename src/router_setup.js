import React from 'react'

import {Switch,Redirect,Route} from 'react-router-dom'
import App from './App'
import SignIn from './Components/signin'
import SignUp from './Components/signup'
import Hello from './Components/hello'



export default function RouterSetup(){

	return(
			<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/signin" component={SignIn}/>
			<Route exact path="/signup" component={SignUp}/>
			<Route exact path="/hello" component={Hello}/>

			<Redirect to="/"/>

			</Switch>
		)

}