import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import background  from '../Images/background.jpg'
import '../Css/home.css'
import { CgDetailsMore } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { SiIcon } from "react-icons/si";
import logo from '../Images/logo.png'
import FeaturedProducts from './featuredProducts'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import {ContentfulDataRetrival,CrochetContext} from '../contentfulDataRetrival';
import styled from 'styled-components'


const Cart_item_image = styled.div`
	max-width:100%;
	// position:relative;
	overflow: hidden;
	padding:30px;
	background:url(${props =>props.imgg}) center/cover no-repeat;
	// background-size:contain;
	background-position:center;
`





export default function Home(){
	const conte = useContext(CrochetContext);
	const contt = conte.addToCartFunction
	const update = conte.updateValue

	console.log("___________",conte)
	function showNavigation(){
		document.querySelector('.nav-items').style.transform="translateX(0%)"
		document.querySelector('.ic-more').style.visibility="hidden";
		// // document.querySelector('.ic-more').style.transition="all 1s linear";
		// document.querySelector('.ic-more').style.height="0px";
		//  document.querySelector('.ic-more').style.setProperty('transition','initial');
	}
	function closeNavigation(){
		document.querySelector('.nav-items').style.transform="translateX(-100%)"
		document.querySelector('.ic-more').style.visibility="visible";
		// document.querySelector('.ic-more').style.transition="all 10s linear";

	}
	function showCartItems(){
		// alert('show cart items');
		document.querySelector('.cart-items').style.transform="translateX(0%)"

	}
	function closeCartItems(){
		// alert('show cart items');
		document.querySelector('.cart-items').style.transform="translateX(100%)"

	}
	function updatee(){
		conte.addToCartFunction(12)
	}

	const cart_item =conte.cart_items.map((element)=>{
		console.log("mappp0ppppppppppping",element);
		return(
				<div className="cart_item_tile" key={element.contentfulID}>

					<div className="cart_item_tile_image_container">
						<Cart_item_image imgg={element.imgsrc}>
						</Cart_item_image>
					</div>

					<div className="cart_item_tile_middle">
						<p>{element.title}</p>
						<p>{element.price}</p>
							<button className="cart_item_remove_btn">remove </button>
					</div>

					<div className="cart_item_drop">
					<IoMdArrowDropup/>
					1
					<IoMdArrowDropdown/>


					</div>


				</div>
			)
	})

	return(
		<>
		<header>
			<div className="home-bg">
				<CgDetailsMore className="icon-header ic-more" onClick={showNavigation}/>

				<div className="logo">
				</div>

				<nav className="big-nav">
					<ul>
						<li><button>Home</button></li>
						<li><button>Products</button></li>
						<li><button>Featured</button></li>
					</ul>
				</nav>
				
				<div className="cart">
					<FiShoppingCart className="icon-header ic-cart" onClick={showCartItems}/>
					<div className="cart-item-count">
					0
					</div>

				</div>

			</div>

			<div className="nav-items">
				<div className="div-cross">
					<ImCross className="icon-header ic-cross" onClick={closeNavigation}/>
				</div>
				<nav className="small-nav">
					<ul>
						<li><button className="header-btns">Home</button></li>
						<li><button className="header-btns">Products</button></li>

						<li><button className="header-btns">Featured</button></li>


					</ul>

				</nav>

			</div>


			<div className="cart-items">
				<div className="div-cross">
					<ImCross id="fuck" className="icon-header ic_cart_cross" onClick={closeCartItems}/>
				</div>
				<div className="cart_item_tile_container">
				{cart_item}


				</div>

			</div>

			<div className="quotes">
				<p>
					Crochets
				</p>
				<p>
					for
				</p>
				<p>
					you
				</p>
			</div>
			<div className="overlay-header">

		    </div>
		</header>
		
		
		
		</>
		)
} 