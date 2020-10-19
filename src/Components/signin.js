import React,{useState,useEffect} from 'react'
import styled from 'styled-components/macro'
import Footer from './footer'


import Banner from './banner'

const Div = styled.div`
	background-color:rgba(0,0,0,0.5);
	max-width:400px;
	margin:0 auto;
	color:#aaadb3;


@media(max-width:768px){
	background-color:black;
	max-width:100%;


}
`
const InnerDiv = styled.div`
	padding:0 50px;
	min-height:80vh;

	@media(max-width:576px){
		min-height:65vh;
	}
`

const Form = styled.form`
	display:flex;
	flex-direction:column;
	// align-items:flex-start;

`

const Row = styled.div`
	display:flex;
	align-items:center;
	justify-content:space-between;
`
const Link = styled.a`
	text-decoration:none;
	color:#aaadb3;

	&:hover{
		text-decoration:underline;

	}
	
		
	
`
const Input = styled.input`
	border-radius:5px;
	padding:0 10px;
    line-height:300%;
    flexGrow:1;
    background-color:#333333;
    margin-bottom:.6em;
    outline:transparent;
    color:white;
    border:none;
`

const getResolution =() =>{
	
	// alert(window.innerWidth)
	console.log(window.innerWidth)
	return window.innerWidth
}

getResolution();

export default function SignIn(props){
	// alert(props.location.pathname)


	return ( <React.Fragment>
		<Banner pathname={props.location.pathname}>
			<Div>
			<InnerDiv>
			<h1 style={{color:"white",marginBottom:"1.5em"}}>Sign In </h1>

			<Form>
				<Input type="text" placeholder="Email or Phone Number"/> 
				<Input type="password" placeholder="password"/>
				<input type="submit" value="Sign In" style={{
					backgroundColor:"#e50914",
					color:"white",
					fontSize:"1.3rem",
					padding:".4em 0",
					borderRadius:"5px",
					marginBottom:".3em",
					border:"none"


				}}/>
			<Row>
				<div><input type="checkbox" checked="checked" onChange={()=>{}}style={{
				}}/>
               <span>Remember Me</span>
               </div>
                <Link href="#">
                need help?
                </Link>
            </Row>
			</Form>

			 


             <p style={{
             	marginTop:"3em"
             }}>New to Netflix? <Link style={{color:"white",fontSize:"1.4rem"}}> Sign up now.</Link></p>
             <p style={{
             	marginTop:"1em"
             }}>
			This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link style={{color:"blue"}}> Learn more.</Link>
             </p>
             </InnerDiv>
			</Div>


	 </Banner>

	 </React.Fragment>)

}