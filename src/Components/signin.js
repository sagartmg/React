import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components/macro'
import Footer from './footer'
import {FirebaseContext} from '../firebase_context'
import {Link,useHistory} from 'react-router-dom'


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
	padding-top:2em;
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
const Links = styled.a`
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




export default function SignIn(props){
		const history = useHistory();
		console.log("propsvalues",props)
	const {firebase} = useContext(FirebaseContext)
	const [values, setValues] = useState({
		email:"",
		password:"",
		error:""
	});
	const [username,setUsername] = useState("");

	const changeValue =(e) =>{
		console.log(e.target.name)
		setValues({...values,[e.target.name]:e.target.value})

	}

	const submitForm = (e)=>{
		e.preventDefault();
		// history.push("/")
		// alert("ok")

		props.signup_path !=='/signup'?(
		// firebase authentication

		firebase.auth().signInWithEmailAndPassword(values.email,values.password)
		.then(()=>{
			// push to browse page
			let userr = firebase.auth().currentUser;
			const {photoURL,displayName} = userr;
			localStorage.setItem("authUser",JSON.stringify({displayName:displayName,photoURL:photoURL}));
			history.push("/browse")

		})
		.catch((error)=>{
			setValues(
				{
					email:"",
					password:"",
					error:error.message

				})


		})
		
		)
		:
		(
			firebase.auth()
				.createUserWithEmailAndPassword(values.email, values.password)
				.then((result)=> result.user.updateProfile({
					displayName:username,
					photoURL:Math.floor(Math.random()*5)+1,

				}))
				.then(()=>{
					let userr = firebase.auth().currentUser;
			const {photoURL,displayName} = userr;
			localStorage.setItem("authUser",JSON.stringify({displayName:displayName,photoURL:photoURL}));
			history.push("/browse")
			history.push("/browse")})
				.catch(error=>{
					setValues({
						email:"",
						password:"",
						error:error.message
					});
					setUsername("");
				})


			)
	}

	return ( <React.Fragment>
		<Banner  pathname={props.location?.pathname || props.signup_path}>
			<Div>
			<InnerDiv>
			<h1 style={{color:"white",marginBottom:"1.5em"}}>{props.signup_path==="/signup" ? "Sign Up" :"Sign In"} </h1>
			{ values.error && <div style={{
				backgroundColor:"orange",
				padding:".7em 1em",
				color:"black",
				marginBottom:"1em",
				borderRadius:"2px"

			}}>
			{values.error}
			</div>}
			<Form onSubmit={submitForm}>
				{props.signup_path=="/signup" && <Input  placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>}
				<Input type="text" placeholder="Email or Phone Number" value={values.email} onChange={changeValue} name="email"/> 
				<Input type="password" placeholder="password" value={values.password} onChange={changeValue} name="password"/>
				<input type="submit" value={props.signup_path=="/signup" ? "Sign Up": "Sign In"} style={{
					backgroundColor:"#e50914",
					color:"white",
					fontSize:"1.3rem",
					padding:".4em 0",
					borderRadius:"5px",
					marginBottom:".3em",
					border:"none"


				}}/>
			{props.signup_path !="/signup" && 
				<Row>
				<div><input type="checkbox" onChange={()=>{}}style={{
				}}/>
               <span>Remember Me</span>
               </div>
                <Links href="#">
                need help?
                </Links>
            </Row>

			}
			</Form>

			 


             <p style={{
             	marginTop:"3em"
             }}>

             {props.signup_path=="/signup" ? "Already a member?  " : " New to Netflix?"}
              <Link to={ props.signup_path=="/signup" ? "/signin" :"/signup"} style={{color:"white",fontSize:"1.4rem"}}> 
{props.signup_path=="/signup" ? "Sign In" : " Sign Up Now"}

              </Link></p>
             <p style={{
             	marginTop:"1em"
             }}>
			This page is protected by Google reCAPTCHA to ensure you're not a bot. <Links style={{color:"blue"}}> Learn more.</Links>
             </p>
             </InnerDiv>
			</Div>


	 </Banner>

	 </React.Fragment>)

}