import React from 'react'
import CreateClient from './contentfulAPISetup';




	const CrochetContext = React.createContext();
     class ContentfulDataRetrival extends React.Component{
     	constructor(props){
     		super(props);
     		console.log("########",props)
     		 this.state = {
     	response:[],
     	cart_items:[  {title: "itching muffler",
     				 price: 100,
     				  imgsrc: "//images.ctfassets.net/so092uklab2r/20nuwNm541uYETSQyjq75i/1f8206592ceb1e4bf836b72c9f7daa20/crochet-1.jpg",
     				 contentfulID: "6n1LlOoTVjI3BGUzXjE60v",
     				 item_count:1},
     				 
     				 ]

     	}
     	this.addToCart = this.addToCart.bind(this)
     	this.removeFromCart = this.removeFromCart.bind(this)

     	this.increaseItemCount = this.increaseItemCount.bind(this)
     	this.decreaseItemCount = this.decreaseItemCount.bind(this)


    
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
	removeFromCart(contentfulID){
		console.log("maiiin revmoe");
		this.state.cart_items.forEach((element,index)=>{if(element.contentfulID==contentfulID){this.state.cart_items.splice(index,1)}});
		this.setState({cart_items:this.state.cart_items});
	}
	
	

	addToCart(cart_item_obj){
		console.log("main")
		this.state.cart_items.push(cart_item_obj);
		this.setState({cart_items:this.state.cart_items});

	}

	increaseItemCount(contentfulID){
		console.log(contentfulID);
		console.log("main")
		this.state.cart_items.forEach((element,index)=>{if(element.contentfulID==contentfulID){this.state.cart_items[index].item_count += 1}});
		this.setState({cart_items:this.state.cart_items});




	}
	decreaseItemCount(contentfulID){
		this.state.cart_items.forEach((element,index)=>{if(element.contentfulID==contentfulID)
							{this.state.cart_items[index].item_count -= 1

								if(this.state.cart_items[index].item_count==0){
									this.removeFromCart(contentfulID);
								}
							}



						});
		this.setState({cart_items:this.state.cart_items});
		console.log("decre")


	}

	render(){

		return(<CrochetContext.Provider value={{...this.state,addToCartFunction:this.addToCart,
			removeFromCart:this.removeFromCart,
			increaseItemCount:this.increaseItemCount,
			decreaseItemCount:this.decreaseItemCount}}>
					{this.props.children}
					</CrochetContext.Provider>
			)

}

}

export {CrochetContext, ContentfulDataRetrival}
