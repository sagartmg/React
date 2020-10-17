import React from 'react';
import styled from 'styled-components/macro'


export const Item = styled.div `
	display:flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color:white;
	overflow:hidden;
`

export const Inner= styled.div`
display:flex;
flex-direction:${({direction})=>direction};
align-items:center;
justify-content:space-between;
max-width:992px;
margin:auto;
width:100%;

@media(max-width:992px){
	flex-direction:column;
}`



export const Pane = styled.div`
width:50%;


@media(max-width:992px){
	width:100%;
	text-align:center;
	padding:0 50px;
}
`;

export const Title = styled.h1`
font-size:3rem;
line-height:1.1;
	

@media(max-width:992px){
	font-size:2rem;
}

`


export const SubTitle = styled.h3`
@media(max-width:992px){
	font-size:1.5rem;
}
`;

export const Image = styled.img `
max-width:100%;
`;

export const Video = styled.video`
max-width:100%;
`
export const Container = styled.div`
	@media(max-width:992px){
		${Item}:last-of-type h3{
			margin-bottom:50px;
			// border-bottom:10px solid red;
		}

		${Item}:first-of-type h3 {
			margin-bottom:25px;
			// border-bottom:10px solid red;
		}

		// ${Image}:last-of-type img{
		// 	position:realtive;
		// 	display:none;
		// }
	}
`;

