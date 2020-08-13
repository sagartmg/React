import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import './Button.css';


export default class JJ extends Component {
  constructor(){
    super();
    this.state={
    showNav:false
  }
  this.change = this.change.bind(this)
  }
  
    change(){

            console.log('pressed')
            
            console.log(this.state.showNav)
            this.setState({showNav:!this.state.showNav})

           
            console.log(this.state.showNav)
          
    }

    render(){
    return (
        <div style={{backgroundColor:"grey"}}>
        <div  className="navBar" style={{display:this.state.showNav?"block":"none"}}>
          <span className="nav-items">menu</span>

          <span className="nav-items">components</span>
          </div>
          <div className="Button" onClick={this.change}>Button</div>
       



    </div>
    )
}
}