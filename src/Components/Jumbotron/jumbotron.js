import React,{Fragment,useEffect,useState} from 'react';
import jumbo from '../../Fixture/jumbo'
import {Item,Inner,Container,Pane,Title,SubTitle,Image,Video} from './Styles/jumbotron_style'
export default function Jumbotron({children, direction="row",...restProps}) {


	// const[once,setOnce] = useState(0)

	// function insertAfter(el, referenceNode) {
 //    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	// }

	// (function () {
 //  // body of the function
 //  console.log("selfcalling")

  
	// 	}());

	// useEffect(()=>{
	// 	console.log(" useEffect useState")
	// 	let imagee = document.querySelector(".tv-imagee3")
	// 	console.log("image as ",imagee)
	// 	// imagee.style.position="relative"
	// 	let videoo = document.createElement("video")
	// 	videoo.innerHTML = `
	// 	 <source src = "videos/boys.mp4" type = "video/mp4">

	// 	`

	// 	videoo.setAttribute("class","tv-video");
	// 	// videoo.setAttribute("src","/videos/bunny.mp4")
	// 	videoo.setAttribute("preload","true")
	// 	videoo.setAttribute("autoplay","autoplay")
	// 	videoo.setAttribute("loop","loop")
	// 	videoo.setAttribute("muted","")
	// 	videoo.setAttribute("volume","0")



	// 	insertAfter(videoo,imagee)
	// 	// let normalTExt= document.createElement("div");
	// 	// normalTExt.innerHTML= `
	// 	// <h1>NOrmal text</h1>

	// 	// `
	// 	// insertAfter(normalTExt,imagee)
	// let videos =[...document.querySelectorAll(".tv-video")]
	// console.log("videso",videos)
	// // videos[1].style.display = "none";
	// // videos[2].style.display = "none";

		


	// },[once])

  return (


    <Item>
    <Inner direction={direction}>
    {children}
    	


    </Inner>
</Item>
      
  );
}

Jumbotron.Container = function JumbotronContainer({children,...restProps}){
	return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children,...restProps}){
	return <Pane> {children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children,...restProps}){
	return <Title> {children}</Title>


}

Jumbotron.SubTitle = function JumbotronSubTitle({children,...restProps}){
	return <SubTitle> {children}</SubTitle>


}

Jumbotron.Image = ({children, ...restProps}) => <Image {...restProps}>{children}</Image>

Jumbotron.Video = ({...restProps}) => <Video{...restProps}/>