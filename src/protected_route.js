import React from 'react'

import {Switch,Redirect,Route} from 'react-router-dom'



export default function ProtectedRoute({component:Component,...rest}){

	let localstorage_data = JSON.parse(localStorage.getItem("authUser"));
	return(
		<Route {...rest} render={props=>localstorage_data? (<Component {...props}/>):
		(
			<Redirect to="/"/>
			)

	}/>
			
		);

}