import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Components/navigation'
import {Switch, Route,Redirect} from 'react-router-dom'
import Home from './Components/Homee'
import Compo from './Components/Componentt'

import Menu from './Components/Menuu'
import ErrorPage from './Components/errorpage'
import {DISHES} from './Shared/dishes'
import DishDetail from './Components/dishdetail'


const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} />
      );
    };
export default class Assign extends React.Component{
	constructor(){
		super();
		this.state={
			dishes:DISHES

	}
	






	}
	

  

    render(){
    	return(
		<>

		<Navigation/>
		<Switch>


		<Route exact path = "/home" component = {Home}/>
		<Route exact path = "/menu" component = {Menu}/>
		<Route path='/home/:dishId' component={DishWithId} />


		<Route exact path = "/component" component = {Compo}/>
		

		</Switch>
		</>
		);

    }
	
}