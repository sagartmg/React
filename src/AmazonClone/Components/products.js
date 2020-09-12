import React,{component}from 'react';
import ReactDOM from 'react-dom';
import '../Css/body.css'

import product from '../Images/product.jpg';

const Border={
	border: "1px solid black",
	margin: "10px",
	backgroundColor:"white",
	padding:"1em"


};
const description={
	// backgroundColor:"red",
}
const expand={
	flexGrow:"1",
	// backgroundColor:"green",
	textAlign:"center"
	// display:"none"
}
const button={
	margin:"10px 0",
	padding:"5px"
}
export default function Products(){
	return(
		<>
		
			<div style={Border} className="products_each">
				<div className="description" style={description}>
					<p> title of products
					</p>
					<p> price products
					</p>
					<div className="products_rating">
					{Array(5)
						.fill()
						.map((_, i)=>(
							<p key={i}>⭐</p>
							)
							)
					}
					</div>
				</div>
				<div className="products_each_image_container">
				<img className="products_each_image" src={product}/>

				</div>
				<div style={expand}>
					<button style={button}> add to cart
				    </button>
				</div>
				
			
			

			</div>

		
	
		</>

		)

}



