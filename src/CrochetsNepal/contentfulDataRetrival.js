import React from 'react'
import CreateClient from './contentfulAPISetup';




	const CrochetContext = React.createContext();
     class ContentfulDataRetrival extends React.Component{
     	constructor(props){
     		super(props);
     		console.log("########",props)
     		 this.state = {
     	response:[],
     	cart_items:[{title: "itching muffler",
     				 price: 100,
     				  imgsrc: "//images.ctfassets.net/so092uklab2r/20nuwNm541uYETSQyjq75i/1f8206592ceb1e4bf836b72c9f7daa20/crochet-1.jpg",
     				 contentfulID: "6n1LlOoTVjI3BGUzXjE60v"}]

     	}
     	this.addToCart = this.addToCart.bind(this)

    
	}

	getData = async()=>{
	try{
		let response = await CreateClient.getEntries({
		content_type:"crochetsNepal"


		});
		console.log("response as ",response.items)
		// contentfulData = response.items;
		// console.log("contentfulData",contentfulData);
		this.setState({response})


	}
	catch(error){
		console.log(error)
	}
	}
	componentDidMount(){
		this.getData();

	}
	
	

	addToCart(cart_item_obj){
		console.log("main")
		this.state.cart_items.push(cart_item_obj);
		



		this.setState({cart_items:this.state.cart_items});

	}

	render(){

		return(<CrochetContext.Provider value={{...this.state,addToCartFunction:this.addToCart}}>
					{this.props.children}
					</CrochetContext.Provider>
			)

}

}

export {CrochetContext, ContentfulDataRetrival}
