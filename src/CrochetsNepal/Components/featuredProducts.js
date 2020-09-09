import React,{Component,useContext} from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom'


import '../Css/featuredProductCss.css';
import {CrochetContext} from '../contentfulDataRetrival'

import styled from 'styled-components'
import { TiTickOutline } from "react-icons/ti";



const Product_image =styled.div`
	width:100%;
	// min-width: 100%;

	height: 260px;
	position:relative;
	overflow: hidden;
	padding:30px;
	background:url(${props =>props.imgg}) center/cover no-repeat;
	background-size:contain;
	background-position:center;
	border:1px solid black;



`;




	


export default function FeaturedProducts(){
	const context = useContext(CrochetContext);
	var color=false;

		// console.log(context);

		const contentfulData =context.response.items
		// console.log("response in featured",contentfulData)


		function updateCart(title,price,imgsrc,contentfulID){
			let obj = {"title":title,
						"price":price,
						"imgsrc":imgsrc,
						"contentfulID":contentfulID,
						"item_count":1
						}
			
			context.addToCartFunction(obj)
		}

		if(contentfulData){
			var featured_data=contentfulData.filter(element=>element.fields.featured ===true)
			// console.log("featured_data",featured_data);

			var contentful_items = featured_data.map((element)=>{
	        var item_present = context.cart_items.filter((cart_el)=>cart_el.contentfulID==element.sys.id);

				var imgurl = element.fields.imageOfCrochetItem[0].fields.file.url;
				return(
						<div className="featured_image_container" key={element.sys.id}>
						
						<Product_image imgg={imgurl} className="product_image">
							<div className ="featured_item_price">
							Rs: {element.fields.price}
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

					)
				
			});
			

		}


		


	return(
				<>


				<h1 className="featured_pro_title">  Featured Products </h1>


				<div className="featured_products_container">
					{contentful_items}
					
					




				</div>

				<div className="all_products_btn">

					<Link to="/all" style={{textDecoration:"none",color:"black"}} className="toAll">
					<h1>All Products</h1>
					</Link>


				</div>




				</>
		)
	}









