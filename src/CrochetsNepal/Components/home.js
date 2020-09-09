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
import {Link} from 'react-router-dom'



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
	function removeItem(contentfulID){
		conte.removeFromCart(contentfulID);

	}
	function increaseItemCount(contentfulID){
		console.log("increase")
		console.log(contentfulID);
		conte.increaseItemCount(contentfulID)

	}
	function decreaseItemCount(contentfulID){
		console.log("de")
		conte.decreaseItemCount(contentfulID)



	}
	// function activate(){
		var navlinks =[...document.querySelectorAll(".big-nav-link")];
		console.log("navlinks",navlinks);
		navlinks.forEach(element=>{
			element.addEventListener("click",()=>{console.log(" activated?");
			element.classList.add("activate");

			});

		})
	// }
	let total_price = 0;

	const cart_item =conte.cart_items.map((element)=>{
		// console.log("mappp0ppppppppppping",element);
		let individual_price = element.price * element.item_count; 
		total_price += individual_price;
		return(
				<div className="cart_item_tile" key={element.contentfulID}>

					<div className="cart_item_tile_image_container">
						<Cart_item_image imgg={element.imgsrc}>
						</Cart_item_image>
					</div>

					<div className="cart_item_tile_middle">
						<p>{element.title}</p>
						<p> Rs:{element.price}</p>
							<button className="cart_item_remove_btn" onClick={()=>removeItem(element.contentfulID)}>remove </button>
					</div>

					<div className="cart_item_drop">
					<IoMdArrowDropup  onClick={()=>{increaseItemCount(element.contentfulID)}} />
					{element.item_count}
					<IoMdArrowDropdown onClick={()=>{decreaseItemCount(element.contentfulID)}} />


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

						<Link to="" style={{textDecoration:"none"}} className="big-nav-link">
						Home
						</Link>

						<Link to="/all" style={{textDecoration:"none"}} className="big-nav-link">
						All 
						</Link>
						
				</nav>
				
				<div className="cart">
					<FiShoppingCart className="icon-header ic-cart" onClick={showCartItems}/>
					<div className="cart-item-count">
					{conte.cart_items.length}
					</div>

				  </div>

			      </div>

			<div className="nav-items">
				<div className="div-cross">
					<ImCross className="icon-header ic-cross" onClick={closeNavigation}/>
				</div>
				<nav className="small-nav">
					<ul>
						<li><button className="header-btns">
							<Link to="" style={{textDecoration:"none",color:"black"}} className="big-nav-link">
							Home
							</Link>
						</button></li>
						<li><button className="header-btns">
								<Link to="/all" style={{textDecoration:"none",color:"black"}} className="big-nav-link">
								All Products
								</Link>
						</button></li>

						


					</ul>

				</nav>

			</div>


			<div className="cart-items">
				<div className="div-cross">
					<ImCross id="fuck" className="icon-header ic_cart_cross" onClick={closeCartItems}/>
				</div>
				<div  style={{textAlign:"center"}}>
					<h1> Your Items </h1>
				</div>

				<div className="cart_item_tile_container">
				{cart_item}


				</div>



				<div style={{textAlign:"center",marginTop:"20px"}}>
					{conte.cart_items.length !=0 ?
					<> 
					<h1> Total Price</h1>
					<h2>
					 Rs: <span style={{textDecoration:"underline"}}>{total_price}</span>
					</h2>
					</>
					:<h1>Cart Empty</h1>}
					
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
			<div className="overlay-header" onClick={()=>{
				closeCartItems();
				closeNavigation();
			}}>

		    </div>
		</header>
		
		
		
		</>
		)
} 