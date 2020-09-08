import React from 'react'
import CreateClient from './contentfulAPISetup';




	const CartContext = React.createContext();
    class CartItemContext extends React.Component{
     state = {
     	cart_items:[]

	}

	
	// this.setState(response={})

	// this.ssetState(response:{"name":"chijacontext"});
	// this.setState({response:12});
	changeResponsee =() =>{
		console.log("main context function ");
		this.setState({cart_items:[{"title":"woolen"}]});
		console.log(this.state)
		// this.setState({response:"hello"})
	};


	


	render(){

		return(<CartContext.Provider value={{...this.state, changeit:this.changeResponsee}}>
					{this.props.children}
					</CartContext.Provider>
			)

}

}

export {CartContext, CartItemContext}
