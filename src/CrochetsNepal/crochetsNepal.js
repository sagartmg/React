import React,{component}from 'react';
import ReactDOM from 'react-dom';
import {ContentfulDataRetrival} from './contentfulDataRetrival'
import {CartItemContext} from './cartItemContext'

import './Css/styles.css'

import Index from './Components/index'
import FeaturedProducts from './Components/featuredProducts'
import SinglePageProducts from './Components/singlePageProducts'

import AllProducts from './Components/allProducts'

import {Route, Switch,Redirect} from 'react-router-dom'



export default function CrochetsNepal(){
	return(

		<>
		<ContentfulDataRetrival>
		<CartItemContext>

		<Switch> {/* Componets that render despite the path are outside the Switch*/}
		<Route exact path='/' component={Index}/>  {/*render Index when on / route */}

		<Route exact path='/all' component={AllProducts}/>
		<Route exact path='/products/:title/:slug' component={SinglePageProducts}/>

		<Redirect to='/'/>
		</Switch>
		</CartItemContext>
		</ContentfulDataRetrival>
		</>

		)

}



