import React from 'react'
import styled from 'styled-components/macro'
import GetStarted from './get_started'


const Image = styled.img``


const Background = styled.div`
display:flex;
flex-direction:column;

max-height:100vh;
// max-width:100vw;
height:100vh;
// background:url(${props =>props.src}) center/cover no-repeat; OR
background:url(${({src})=>src}) center/cover no-repeat;

`

const Row = styled.div`
	padding:0 3em;
	display:flex;
	justify-content:space-between;
	align-items:center;
	// background-color:pink;
	// max-width:100%;
	// height:100px;

`
const Logo = styled.img`
width:200px;
@media(max-width:768px){
	width:100px;
}
// width:14%;
// height:20px;
	
`
const Button = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;

`

const Container = styled.div`
	// margin-top:5em;
	// margin
	color:white;
	flex-grow:1;
	max-width:800px;
	margin:-8em auto 0 auto;
	display:flex;
	flex-direction:column;
	// align-items:center;
	align-self:center;
	justify-content:center;

	@media(max-width:992px){
		padding:0 2em;
	}
`

export default function Banner({children, pathname}){
	console.log("signin",pathname)
	console.log("children",children)

	return <Background  src="/images/misc/home-bg.jpg">
		<Row>
			<Logo src="/images/Netflix_logo.png"/>
			


			{pathname !="/signin" && <Button>
			<button style={{background:"#e50914",
			outline:"none",
			border:"transparent",
			padding:"0.4em 0.8em",
			color:"white",
			borderRadius:"5%",
			fontSize:"1.2rem",

			}}>
			Sign In
			</button>
			</Button>}

		</Row>
		{children}

		{ pathname!="/signin" && <Container>
				<h1 style={{
					textAlign:"center",
					fontSize:"3rem"
				}}>100% entertainment.
		      Get your 2nd month free.</h1>
			<p style={{
					textAlign:"center",
					fontSize:"1.1rem",
					marginBottom:".5em"

				}}
				>Watch anywhere. Cancel anytime
			</p>
			<p style={{
					textAlign:"center",
					fontSize:"1.1rem",
					marginBottom:".5em"


				}}>
			Ready to watch? Enter your email to create or restart your membership.
			</p>
			<GetStarted/>
			<p style={{
					textAlign:"center",
					fontSize:"1.1rem",
					marginTop:".5em"


				}}>Only new members are eligible for this offer.
			</p>
	    </Container>}




	</Background>

		


	

	
} 