import React,{useContext,useState,useEffect} from 'react'
// import Logo from 'publicfolder/images/Netflix_logo.png'
import styled from 'styled-components/macro'
import { BiSearchAlt} from 'react-icons/bi';
import useFirestoreData from '../hooks/use_firestore_data';
import selectionFilter from '../utils/selection-filter';
import Fuse from 'fuse.js'
import {useHistory} from 'react-router-dom'


const Logo = styled.img`
width:200px;
@media(max-width:768px){
	width:100px;
}
// width:14%;
// height:20px;
	
`
const User = styled.img`
flex:7;
width:100px;
@media(max-width:768px){
	width:50px;
}
`


const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding: 1em 3em;
color:white;
`
const Left = styled.div`
display:flex;
align-items:center;

@media(max-width:768px){
	flex-direction:column;
}
`
const Right = styled.div`
display:flex;
flex-direction:row;
align-items:center;

@media(max-width:768px){
	flex-direction:column-reverse;
	align-items:flex-end
}
`
const Details =styled.div`
display:flex;
flex-direction:column;
// background-color:white;
@media(max-width:768px){
	flex-direction:row-reverse;
	align-items:flex-end;
}
`
const Name = styled.div`
// flex:3;
display:flex;
// align-self:center;
// justify-content:center;
visibility:hidden;
@media(max-width:768px){
	justify-content:flex-end;
}
`

const CardContainer = styled.div`
display:flex;
max-width:100vw;
align-items:center;

@media(max-width:768px){
	flex-direction:column;
}
`
const Card = styled.div`
position:relative;
// background-color:white;
flex:1;
transition:all 0.2s linear;

	 &:hover {
    transform: scale(1.3);
    z-index: 99;
  }
	
`
const CardMeta = styled.div`
position:absolute;
// background-color:white;
// top:60%;
bottom:1em;
font-size:.7rem;
// overflow:scroll;
// background-color:orange;
`
const CardImage = styled.img`
max-width:100%;
transition:all 0.3s linear;

 // &:hover{
 // 	// max-width:120%;
 // 	z-index:100;
	// transform: scale(1.5);

 // }



`
const Large = styled.div`
	background-color:orange;
	background:url(${props=>props.src})center/cover no-repeat;
	height:200px;
	display:flex;
	flex-direction:column;
	position:relative;

	@media(max-width:768px){ // 768  and less 
		display:none;
	}

`
const ELarge = styled.div`
	background-color:orange;
	background:url(${props=>props.src})center/cover no-repeat;
	height:200px;
	display:flex;
	flex-direction:column;
	position:relative;

	@media(min-width:769px){  // 769 and to +infinithy applied too.  
		display:none;
	}
	

`
const Cross = styled.div`
	position:absolute;
	Right:1em;
	top:1em;
	border:2px solid red;
	height:40px;
	width:40px;
	border-radius:50%;
	// overflow:hidden;
	display:flex;
	align-items:center;
	justify-content:center;
	cursor:pointer;
`
const LargeImage = styled.img`
	width:100%;
`
export default function Browse(props){
	const history = useHistory();
	console.log("borserProps",props)
	const {slides} = props

	

	let localstorage_data = JSON.parse(localStorage.getItem("authUser"));
	const{displayName,photoURL} = localstorage_data;
	const [show_search , setShowSearch] = useState(false)
	const [search_term, setSearchTerm] = useState("");
	const [videos,setVideos] = useState("series")
	const[enlarge , setEnlarge] =useState({});

	const[data,setData] = useState([])
	// setData(slides[videos]);

	useEffect(()=>{
		setData(slides[videos]);
		console.log("dataaaa",data)

	},[slides,videos])

	useEffect(()=>{
		if(search_term.length>1){

		const fuse = new Fuse(slides[videos],{
		keys:[
			'data.genre','data.title','data.description'
		],includeScore:true
		})
		const result = fuse.search(search_term).map(({item})=>item);
		console.log("resut",result);

		setData(result)
		}
		else{
			setData(slides[videos])
		}


	},[search_term])

	

	


	function mapper(){
		return data.map(video=><div key={video.title} style={{color:"white",marginBottom:"2em",padding:"0 3em"}}>{video.title}
												<CardContainer>
												{video.data.map(meta=><Card key={meta.id}>
													
																		<CardImage src= {`/images/${videos}/${video.title}/${meta.slug}/small.jpg`} 
																		onClick={()=>{
																			let enlarged ={
																				img_src:`/images/${videos}/${video.title}/${meta.slug}/large.jpg`,
																				description:meta.description,
																				title:meta.title,
																				genre:video.title,
																			}
																			setEnlarge(enlarged);
																		}}
																		/>
																		<p style={{textAlign:"center"}}>{meta.title}</p>


																		<CardMeta>
																	{/* 
																		{meta.description}
																	 */}

																		</CardMeta>
																		

																		{enlarge.title === meta.title && <ELarge src={enlarge.img_src}>
											
																			<div style={{
																				maxWidth:"44vw",
																				flexGrow:"1",
																				display:"flex",
																				flexDirection:"column",
																				justifyContent:"center",
																				padding:"0 1.6em",


																			}}>
																				<p style={{marginBottom:"1em"}}>{enlarge.title}</p>
																				<p>{enlarge.description}</p>
																			</div>
																			<Cross onClick={()=>{
																				setEnlarge({})
																			}}>
																			X
																			</Cross>

																			</ELarge>
																		}


																		</Card>)}
																	
													
{/* 
													// todo fro large images on click of CardMeta like a single page and get props. 
													// todo also the transitions of slide of images
 */}													
												</CardContainer>


											 {enlarge.genre === video.title && <Large src={enlarge.img_src}>
											{/* 
												todo : in small screens, this is display none and for each images under each image, there will be this. 
											 */}
												<div style={{
													maxWidth:"44vw",
													flexGrow:"1",
													display:"flex",
													flexDirection:"column",
													justifyContent:"center",
													padding:"0 1.6em",


												}}>
													<p style={{marginBottom:"1em"}}>{enlarge.title}</p>
													<p>{enlarge.description}</p>
												</div>
												<Cross onClick={()=>{
													setEnlarge({})
												}}>
												X
												</Cross>

												</Large>
											}
										     	

										 </div>)
	}

	useEffect(()=>{
		console.log("useEffect of browse")
		let user_pic = document.querySelector(".details")
	    console.log("user_pic",user_pic)
	    user_pic.addEventListener("mouseover",()=>{
	    	document.querySelector(".displayName").style.visibility="initial";
	    	document.querySelector(".signout").style.visibility="initial";

	    })
	    user_pic.addEventListener("mouseout",()=>{
	    document.querySelector(".displayName").style.visibility="hidden";
	    document.querySelector(".signout").style.visibility="hidden";
	    })


	})
	

	return <React.Fragment>
			<Container>
			<Left>
			<Logo src="/images/Netflix_logo.png"/>
			<div style={{display:"flex"}}>
			<p style={{cursor:"pointer",marginRight:"1em",
			 textDecoration:videos=="series" &&  "underline"}}onClick={()=>{setVideos("series")}}>
			series
			</p>
			<p style={{cursor:"pointer",textDecoration:videos=="films" && "underline"}}onClick={()=>{setVideos("films")}}>movies</p>
			</div>
			</Left>
			<Right>
				<div className="searching">
						{show_search && <input placeholder="shows name"  onChange={(e)=>setSearchTerm(e.target.value)} style={{
							lineHeight:"200%",
							padding:"0 1.2em",
							outline:"transparent",
							border:"transparent",
							borderRadius:"5px"

						}}/>}
						<BiSearchAlt onClick={()=>{
							setShowSearch(true)
						}} style={{fontSize:"2.5rem",cursor:"pointer"}}/>
				</div>

				<Details className="details">
					<User className="userPhoto" src={`/images/users/${photoURL}.png`}/>
					<div>
					<Name className="displayName">{displayName}</Name>
					<p style={{visibility:"hidden", cursor:"pointer"}} className="signout" onClick={
						()=>{window.localStorage.removeItem("authUser")
						history.push("/")
						}}>sign out</p>
					</div>
				</Details>
			</Right>
			</Container>
			{mapper()}



	</React.Fragment>
} 