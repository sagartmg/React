import React, {Component} from 'react'
import ReactDOM from 'react-dom';


import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {DISHES} from '../Shared/dishes'
import Comments from './comments'


export default class Menu extends Component {

    constructor(props) {
        super(props);
        console.log('inside menu ')
        console.log('menuprops',props)

        this.state = {
            selectedDish: null,
            length:0
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
        if(dish!=null){
        const cmtlength = dish.comments.length
        this.setState({length:cmtlength})
      console.log(typeof(cmtlength),cmtlength);

      }
    }

    renderDish(dish) {

      
      
        if (dish != null)
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                    <p>
                    number of commments is
                    {this.state.length}
                    <Comments obj ={this.state.selectedDish}/>
                    </p>
       
             </Card>
            ); 
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = DISHES.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1" key={dish.id}>
                <Card 
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}
