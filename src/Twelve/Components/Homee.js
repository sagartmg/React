import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DISHES } from '../Shared/dishes'
import {Link, Route } from 'react-router-dom'
import { Card, CardBody, CardImg, CardTitle, CardImgOverlay } from 'reactstrap'
import DishWithId from './dishwithid'


const name = "sagar"



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	description:true,
        	dataa:{}

        }
        this.onDishSelect = this.onDishSelect.bind(this)
    }

    onDishSelect(props) {
        console.log('onDishSelect')
        this.setState({dataa:props,description: !this.state.description})
        console.log(this.state.description)

    }
    showDescription(){
    	return(
    		<div>
    		{this.state.dataa.description}
    		
    		</div>)
    }

   
    

    mapping() {

        const data = DISHES.map(dish => {
        	


            return (
                <div  className="col-12 col-md-5 m-1" key={dish.id}>
                <Card onClick={()=>this.onDishSelect(dish)}
                 >
                <Link to={`/home/${dish.id}`}>

                  <CardImg style={{width:"200px"}} src={dish.image} alt={dish.name} />
                  <CardImgOverlay className="text-right">
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Link>

                </Card>
              </div>
            );

        })

        return data;

    }



    render() {
        return (
            <div>
			
			{this.mapping()}
                {this.state.description?this.showDescription():null}

			</div>
        )

    }
}