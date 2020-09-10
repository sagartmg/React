import React,{component,useContext}from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import styled from 'styled-components'

import {CrochetContext} from '../contentfulDataRetrival';


import { TiTickOutline } from "react-icons/ti";

import {Link,NavLink} from 'react-router-dom'

import '../Css/singlePage.css'





const Product_image =styled.div`
	width:100%;
	// min-width: 100%;

	height: 260px;
	position:relative;
	// overflow: hidden;
	padding:30px;
	background:url(${props =>props.imgg}) center/cover no-repeat;
	// background-size:contain;
	background-position:center;
	border:1px solid black;
	// margin-bottom:-10px;
	background-color:#f2f2f2;



`;


const Single_Image =styled.div`
	width:100%;

	max-height: 360px;
	min-height:260px;
	// position:relative;
	// overflow: hidden;
	padding:30px;
	background:url(${props =>props.imgg}) center/cover no-repeat;
	// background-size:contain;
	background-position:center;
	// border:1px solid black;
	// margin-bottom:-10px;
	background-color:#f2f2f2;



`;



export default function SinglePageProducts({match}){




	console.log("singlematch",match)
	const response = useContext(CrochetContext);
	const all_data = response.response.items;
	console.log(match);
	let slug = match.params.slug;
	console.log("single",response.response.items)


	function updateCart(title,price,imgsrc,contentfulID){
			let obj = {"title":title,
							"price":price,
							"imgsrc":imgsrc,
							"contentfulID":contentfulID,
							"item_count":1
							}
				
				response.addToCartFunction(obj)
		}


	if(all_data){
		var specific_item = all_data.find((element)=>element.sys.id == slug);
		 var imgurll = specific_item.fields.imageOfCrochetItem[0].fields.file.url
		console.log("specific_item",specific_item);
		var rest_of_items = all_data.filter((element)=>element.sys.id !== slug);

		var contentful_items= rest_of_items.map((element)=>{
	    var imgurl = element.fields.imageOfCrochetItem[0].fields.file.url;
	    var item_present = response.cart_items.filter((cart_el)=>cart_el.contentfulID==element.sys.id);
	    // alert(item_present);
	    // console.log("item_present",item_present,item_present.length);

		return(	

						<div className="featured_image_container" key={element.sys.id}>
				<NavLink to={`/products/${element.fields.crochetTitle}/${element.sys.id}`}>
						
						<Product_image imgg={imgurl} className="product_image">
							<div className ="featured_item_price">
						Rs: {element.fields.price}
							</div>

							{item_present.length == 1?
							<TiTickOutline  className ="added_to_cart_ticker icon-header" />
							:null}
						</Product_image>
				</NavLink>
				        {item_present.length != 1?
								<button className="add_cart_btn" onClick={()=>{updateCart(element.fields.crochetTitle,
									element.fields.price, 
									element.fields.imageOfCrochetItem[0].fields.file.url,
									element.sys.id)}}
									>add to cart</button>
							:null

							}

						
							
						
						<div className="featured_item_title">
										{element.fields.crochetTitle}
						
						</div>
					</div>

						

					)
	}
	)


	}


	
	return(

		<>
		<Home/>
		{specific_item?<>
				<div>
			

				<div className="single_description">
					<div className="single_image">
						<Single_Image imgg={imgurll}>
						</Single_Image>
						

					</div>
					<div className="single_details">
							<p id="single_title">{specific_item.fields.crochetTitle}</p>
							<p id="single_price">Rs:{specific_item.fields.price}</p>
							<p id="single_describe">{specific_item.fields.crochetDescription}</p>
					</div>
				</div>



				</div>

			</>:console.log("not at all")}
		<div style={{textAlign:"center"}}>
		<h1>
		other products
		</h1>

		</div>
		<div className="featured_products_container">
					{contentful_items}
					
					




			</div>
		
		
		</>

		)

}



