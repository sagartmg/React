import React from 'react'

import {Switch,Redirect,Route} from 'react-router-dom'
import App from './App'
import SignIn from './Components/signin'
import SignUp from './Components/signup'
import Hello from './Components/hello'
import ProtectedRoute from './protected_route'
import Private from './private'
import Browse from './Components/browse'
import Logged from './logged'




export default function RouterSetup(){

	return(
			<Switch>
			<Route exact path="/landing" component={App}/>
			<Logged exact path="/" component={Browse}/>
			<Route exact path="/signin" component={SignIn}/>
			<Route exact path="/signup" component={SignUp}/>
			<Route exact path="/hello" component={Hello}/>

			<ProtectedRoute exact path ="/browse" component={Browse}/>

			<Redirect to="/"/>

			</Switch>
		)

}