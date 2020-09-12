import React,{component}from 'react';
import ReactDOM from 'react-dom';
import '../Css/body.css'

import background from '../Images/background.jpg';
import Products from './products'






export default function Body(){
	return(
		<>
		
		<div className="body">
			<img id="body_background" src={background}/>
		<div className="whole_products">

		<div className="products_container">
			<div className="products_container_under">
			<Products/>
			</div>
			<div className="products_container_under">
			<Products/>
			</div>
			<div className="products_container_under">
			<Products/>
			</div>


			
		</div>
		<div className="products_container">
			
			<div className="products_container_under">
			<Products/>
			</div>
			<div className="products_container_under">
			<Products/>
			</div>


			
		</div>
		<div className="products_container">
			
			
			<div className="products_container_under">
			<Products/>
			</div>


			
		</div>
			</div>
		
		</div>

		
	
		</>

		)

}



