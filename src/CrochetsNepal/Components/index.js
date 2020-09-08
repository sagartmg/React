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
import Home from './home';
import AllProducts from './allProducts'



export default function Index(){

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
	

	return(
		<>
		<Home/>
		<FeaturedProducts/>
		</>
		)
} 