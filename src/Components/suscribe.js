import React,{useState,useEffect} from 'react'
import faq from '../Fixture/faqs'
import styled from 'styled-components/macro'
import GetStarted from './get_started'


const Whole = styled.div`

	// border-bottom:8px solid #222;

`
const Container= styled.div`
	// max-width:60%;
	margin:0 auto;
	// width:498px;
	margin-bottom:5em;

	@media(min-width:992px){
		// max-width:45%;
		// background-color:teal;
	}
`

const Suscription = styled.div`
	display:flex;
	flex-direction:row;
	// background-color:orange;


	@media(max-width:992px){
		flex-direction:column;
	}
`

export default function Suscribe(){ 
	useEffect(()=>{
		console.log("useEffect")
		let questions = document.querySelector(".faq__Question-sc-154nkxv-2");
		let questions_width = questions.getBoundingClientRect().width
		console.log(questions_width);

		let subs_cont = document.querySelector(".subscription_container")
		console.log(subs_cont);
		// subs_cont.style.backgroundColor="green";
		subs_cont.style.width=`${questions_width-50}px`;


	})

	return <>

	<Whole>
	<Container className = "subscription_container">
	<p style={{color:"white",textAlign:"center",fontSize:"1.3rem",marginTop:".7em",marginBottom:".4em"}}>
	Ready to watch? Enter your email to create or restart your membership.</p>
	
	<GetStarted/>
	</Container>
	</Whole>
	
	</>
}	