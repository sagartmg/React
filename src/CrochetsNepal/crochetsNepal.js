import React,{component}from 'react';
import ReactDOM from 'react-dom';
import {ContentfulDataRetrival} from './contentfulDataRetrival'
import {CartItemContext} from './cartItemContext'

import './Css/styles.css'

import Index from './Components/index'
import FeaturedProducts from './Components/featuredProducts'
import AllProducts from './Components/allProducts'

import {Route, Switch,Redirect} from 'react-router-dom'



export default function CrochetsNepal(){
	return(

		<>
		<ContentfulDataRetrival>
		<CartItemContext>

		<Switch>
		<Route exact path='/' component={Index}/>

		<Route exact path='/all' component={AllProducts}/>
		<Redirect to='/'/>
		</Switch>
		</CartItemContext>
		</ContentfulDataRetrival>
		</>

		)

}



