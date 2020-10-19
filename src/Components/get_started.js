import React from 'react';
import styled from 'styled-components/macro' 



const Suscription = styled.div`
	display:flex;
	flex-direction:row;
	// background-color:orange;
	// max-width:70%;
	min-width:100%;
	margin:0 auto;


	@media(max-width:992px){
		flex-direction:column;
		// max-width:90%;
	}
`



export default function GetStarted(){

	return <>
	<Suscription>
	<input type="email" placeholder="Email address" style={{
		padding:"15px 10px",
    lineHeight:"100%",
    flexGrow:"1",
    border:"none",
    outline:"transparent",
    borderRadius:"5px",
	}}/>

	<div className="button_container_subscription">
	<button style={{background:"#e50914",
		outline:"none",
		border:"transparent",
		padding:"0.4em 0.8em",
		color:"white",
		fontSize:"1.2rem",
		height:"100%"

		}}>
		GET STARTED >
	</button>
	</div>
	</Suscription>
	</>

}