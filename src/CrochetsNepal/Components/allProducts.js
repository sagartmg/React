import React,{Component,useContext} from 'react';
import ReactDOM from 'react-dom';

import {CrochetContext} from '../contentfulDataRetrival'

import styled from 'styled-components'
import Home from './home'
import Button_to_cart from './styledButtonToCart'
import { TiTickOutline } from "react-icons/ti";






const Product_image =styled.div`
	width:100%;
	// min-width: 100%;

	height: 260px;
	position:relative;
	overflow: hidden;
	padding:30px;
	background:url(${props =>props.imgg}) center/cover no-repeat;
	// background-size:contain;
	background-position:center;
	border:1px solid black;



`;

function changeit(){
	alert("ok");
}



export default function AllProducts(){
	const contentful_data = useContext(CrochetContext);
	console.log(contentful_data);
	const contentful_response = contentful_data.response.items;
	console.log("respons_______",contentful_response);
	function updateCart(title,price,imgsrc,contentfulID){
		let obj = {"title":title,
						"price":price,
						"imgsrc":imgsrc,
						"contentfulID":contentfulID
						}
			
			contentful_data.addToCartFunction(obj)
	}

	if(contentful_response){

		var contentful_items= contentful_response.map((element)=>{
	    var imgurl = element.fields.imageOfCrochetItem[0].fields.file.url;
	    var item_present = contentful_data.cart_items.filter((cart_el)=>cart_el.contentfulID==element.sys.id);
	    // alert(item_present);
	    console.log("item_present",item_present,item_present.length);

		return <React.Fragment key={element.sys.id}>
		<div className="featured_image_container" >
						
						<Product_image imgg={imgurl} className="product_image">
							<div className ="featured_item_price">
							{element.fields.price}
							</div>
							{item_present.length == 1?
							<TiTickOutline  className ="added_to_cart_ticker icon-header" />
							:null}

							{item_present.length != 1?
								<div className="featured_image_add_cart">
								<button onClick={()=>{updateCart(element.fields.crochetTitle,
									element.fields.price, 
									element.fields.imageOfCrochetItem[0].fields.file.url,
									element.sys.id)}}
									>add to cart</button>
							</div>:null

							}

							
							



						</Product_image>
						
							
						
						<div className="featured_item_title">
										{element.fields.crochetTitle}
						
						</div>
					</div>

		</React.Fragment>
	})

	}
	



	return(
			<>

			<Home/>
			<h1 className="featured_pro_title">  ALL Products </h1>

			<div className="featured_products_container">
					{contentful_items}
					
					




			</div>
			</>
		);

}
	









