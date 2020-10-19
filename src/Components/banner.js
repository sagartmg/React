import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components/macro'
import GetStarted from './get_started'
import Footer from './footer'


const Image = styled.img``


const Background = styled.div`
display:flex;
flex-direction:column;

// border-bottom:8px solid #222;
border-bottom:${ props=>{return props.path=="/" ? "8px solid #222" : null}};

// max-height:${props=>{return props.path="/"? "100vh":null}};
// max-width:100vw;
min-height:100vh;


// background:url(${props =>props.src}) center/cover no-repeat; OR
background:url(${({src})=>src}) center/cover no-repeat;

@media(max-width:768px){
	background:${props=>{
		// alert(props)
		// console.log("signin",props)
		return props.path=="/signin" ? "black" : null
	}
	


}

`

const Row = styled.div`
	padding:0 3em;
	z-index:2;
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
	// console.log("signin",pathname)
	// alert(pathname)
	// console.log("children",children)

	return <Background  src={ pathname=="/" ? "/images/misc/home-bg.jpg": "/images/misc/home-bg.jpg"} path={pathname}>
	     	<Row>
	     	<Link to="/">
			<Logo src="/images/Netflix_logo.png"/>
			</Link>
			


			{pathname !="/signin" && <Button>
			
				<button style={{background:"#e50914",
				outline:"none",
				border:"transparent",
				padding:"0.4em 0.8em",
				color:"white",
				borderRadius:"5%",
				fontSize:"1.2rem",

				}}>
				<Link to="/signin" style={{
					textDecoration:"none",
					color:"white"
				}}>
				Sign In
					</Link>

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



	    {pathname=="/signin" &&  <Footer pathname={pathname}/>}
	</Background>

		


	

	
} 