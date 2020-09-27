import React,{useEffect,useContext}from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com'
import { ImFacebook } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';

import { AiFillLinkedin } from 'react-icons/ai';

import { AiOutlineInstagram } from 'react-icons/ai';
import '../Css/footer.css'







import '../Css/contact.css'




export default function Footer(){
				return(
		<>
		<div className="footer_container">
			<div className="footer_container_inner">
				<div className="footer_container_inner1">
					<div><AiFillGithub className="footer_icons" /></div>
					<div><ImFacebook className="footer_icons"/></div>
					<div><AiOutlineInstagram className="footer_icons"/></div>
					<div><AiFillLinkedin className="footer_icons"/></div>
				</div>
			
				
			</div>
			<div className="footer_contents">
			<p>&copy; Sagar Tamang <span style={{fontSize:"0.8rem",color:"#bfbfbf"}}>2020</span></p>
			</div>
		</div>
	
	
		</>

		)

}



