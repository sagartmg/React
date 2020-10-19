import React from 'react'
import styled from 'styled-components/macro'


import Banner from './banner'

const Div = styled.div`
	background-color:pink;
	// display:inline;
`

const Form = styled.form`
	display:flex;
	flex-direction:column;
	align-items:flex-start;

`

const Row = styled.div`
	display:flex;
`
const Link = styled.a`
	text-decoration:none;
	color:initial;

	&:hover{
		text-decoration:underline;

	}
	
		
	
`



export default function SignIn(props){
	console.log(props)

	return (<Banner pathname={props.location.pathname}>
			<Div>
			<h1>Sign In </h1>

			<Form>
				<input type="text" placeholder="email"/> 
				<input type="password" placeholder="password"/>
				<input type="submit" value="signin"/>
				<Row>
				<input type="checkbox" checked="checked" style={{display:"inline"}}/>
                <span style={{display:"inline"}}>Remember Me</span>
                <Link href="#">
                need help?
                </Link>
                </Row>
			</Form>

			</Div>

	 </Banner>)

}