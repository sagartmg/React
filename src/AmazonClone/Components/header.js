import React,{component}from 'react';
import ReactDOM from 'react-dom';
import '../Css/header.css'

import { BiSearchAlt } from 'react-icons/bi';
import logo from '../Images/logo.png';


import { BiCart } from 'react-icons/bi';
import {Link} from 'react-router-dom'




export default function Header(){
	return(

		<>
	{/* header  */}
		
		<div className="header">

		<img className="a_logo header_items" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>




			<div className="search_bar header_items">
				<div className="search_area">
				<input  className="search_input" type="text"/>
				
				</div>
				<button className="header_btn">
				<BiSearchAlt className="header_icons"/>

				</button>


			</div>

			<div className="info header_items">
				<div className="info-items">
				<p  className="info-1">hello,sign in </p>
				<p className="info-2">Account</p>
			    </div>

			    <div  className="info-items">
				<p className="info-1">returns  </p>
				<p className="info-2">orders</p>
			    </div>

			</div>

			<div className="cart_box header_items">
				<span>0
				</span>
				<Link to="/cart">
				<BiCart className="header_icons header_icons_cart"/>
				</Link>
				Cart
			</div>

		</div>

	{/* end of header */}
	
		</>

		)

}



