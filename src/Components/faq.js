import React,{useState} from 'react'
import faq from '../Fixture/faqs'
import styled from 'styled-components/macro'


const Container = styled.div`
	color:white;
	max-width:800px;
	margin:6em auto 0 auto;

	@media(max-width:992px){
		max-width:500px;

	}
`
const Row = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;


padding:0.4em 2em;


`
const Question = styled.div`
display:flex;
	font-size:1.6rem;

flex-direction:column;
background-color:#333333;
margin-bottom:1em;

@media(max-width:992px){
	font-size:1.4rem;
}
;

`
const Answer = styled.p`
padding:1.5em 2em;

padding-top:1em;
border-top:2px solid black;
`
const Icon = styled.p`
font-size:2.5rem;
`


export default function Faq(){
	const[first ,setFirst] = useState(true);


	function toggleAnswer(event,id){
	     // let from_top = event.target.offsetTop
	     // let current_top = event.target.getBoundingClientRect().top

	     // console.log(from_top)
	     // alert(from_top)

		console.log("toggle")
		let answer_ = document.querySelectorAll(`.hide`)

	     answer_.forEach((el,index)=>{
	     	if(el.classList.contains("show")){
	     		if(index+1 != id){
	     		el.classList.remove("show")
	     	}

	     	}



		})

	     let sepcific = document.querySelector(`.answer${id}`)
	     sepcific.classList.toggle("show")
	     
	     // console.log(from_top,current_top)
	     // window.scrollTo({
	     // 	top:from_top+current_top
	     // })
		// answer_.forEach(()).classList.toggle("show");
	}

	return <>
	<Container>
	<p className="faqq" style={{textAlign:"center",marginBottom:"0.6em",fontWeight:"bold"}}>Frequently Asked Questions</p>
	{
		faq.map(el=>{
			return <Question key={el.id}>
			<Row>
				<p>{el.header}</p>
				<Icon onClick={(e)=>toggleAnswer(e,el.id)}>+</Icon>


			</Row>
			<Answer className={`answer${el.id} hide`}> {el.body}</Answer>
			</Question>
			
		})
	}
	</Container>
	</>
}