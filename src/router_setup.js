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


import useFirestoreData from './hooks/use_firestore_data';
import selectionFilter from './utils/selection-filter';
	

export default function RouterSetup(){
	 const {series} = useFirestoreData("series")
	  const {films} = useFirestoreData("films")

	  const slides = selectionFilter({series,films})
	  console.log("router_setup,",slides)

	return(
			<Switch>
			<Route exact path="/landing" component={App}/>
			<Logged exact path="/" component={()=><Browse slides={slides}/>}/>
			<Route exact path="/signin" component={SignIn}/>
			<Route exact path="/signup" component={SignUp}/>
			<Route exact path="/hello" component={Hello}/>

			<ProtectedRoute exact path ="/browse" component={()=><Browse slides={slides}/>}/>

			<Redirect to="/"/>

			</Switch>
		)

}