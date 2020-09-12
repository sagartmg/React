import React,{component}from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header'
import Checkout from './Components/checkout'

import Body from './Components/body'
import Another from './Components/another'
import {Route,Switch} from 'react-router-dom'


import './Css/styles.css'


export default function AmazonClone(){
	return(

		<>
	{/* Switch and Routes...*/}

	<Header/>
	<Switch>
	<Route exact path="/" component={Body}/>

	<Route exact path="/checkout" component={Checkout}/>
	</Switch>
		
		</>

		)

}



