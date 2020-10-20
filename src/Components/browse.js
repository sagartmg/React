import React,{useContext,useState,useEffect} from 'react'
// import Logo from 'publicfolder/images/Netflix_logo.png'
import styled from 'styled-components/macro'
import { BiSearchAlt} from 'react-icons/bi';
import useFirestoreData from '../hooks/use_firestore_data';
import selectionFilter from '../utils/selection-filter'

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
`
const Right = styled.div`
display:flex;
align-items:center;
`
const Details =styled.div`
display:flex;
flex-direction:column;

`
const Name = styled.div`
flex:3;
display:flex;
align-self:center;
visibility:hidden;
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
`
const CardMeta = styled.div`
position:absolute;
// background-color:white;
top:60%;
// overflow:scroll;
// background-color:orange;
`
const CardImage = styled.img`
max-width:100%;
z-index:12;
transition:all 0.3s linear;

 &:hover{
 	// max-width:120%;
 	z-index:100;
	transform: scale(1.5);

 }



`
const Large = styled.div`
	background-color:orange;
	background:url(${props=>props.src})center/cover no-repeat;
	height:200px;
	display:flex;
	flex-direction:column;
	position:relative;
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
export default function Browse(){
	 const {series} = useFirestoreData("series")
	  const {films} = useFirestoreData("films")

	  const slides = selectionFilter({series,films})
	  console.log("slides,",slides)





	let localstorage_data = JSON.parse(localStorage.getItem("authUser"));
	const{displayName,photoURL} = localstorage_data;
	const [show_search , setShowSearch] = useState(false)
	const [search_term, setSearchTerm] = useState("");
	const [videos,setVideos] = useState("films")
	const[enlarge , setEnlarge] =useState({});

	const[data,setData] = useState(selectionFilter({series,films}))
	console.log("dataaaa",data)

	


	function mapper(){
		let tobemapped = `${videos}`
		return slides.films.map(video=><div key={video.title} style={{color:"white",marginBottom:"2em"}}>{video.title}
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
															// console.log(enlarged)
															// alert("clicked")
														}}
														/>
														<p style={{textAlign:"center"}}>{meta.title}</p>


														<CardMeta>
														{/* {meta.description} */}
														</CardMeta>


														</Card>)}
													
													
{/* 
													// todo fro large images on click of CardMeta like a single page and get props. 
													// todo also the transitions of slide of images
 */}													
												</CardContainer>


											 {enlarge.genre === video.title && <Large src={enlarge.img_src}>
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
		let user_pic = document.querySelector(".userPhoto")
	    console.log("user_pic",user_pic)
	    user_pic.addEventListener("mouseover",()=>{
	    	document.querySelector(".displayName").style.visibility="initial";
	    })
	    user_pic.addEventListener("mouseout",()=>{
	    document.querySelector(".displayName").style.visibility="hidden";
	    })


	})
	

	return <React.Fragment>
			<Container>
			<Left>
			<Logo src="/images/Netflix_logo.png"/>
			<p style={{cursor:"pointer",marginRight:"1em",
			 textDecoration:videos=="series" &&  "underline"}}onClick={()=>{setVideos("series")}}>
			series
			</p>
			<p style={{cursor:"pointer",textDecoration:videos=="films" && "underline"}}onClick={()=>{setVideos("films")}}>movies</p>
			</Left>
			<Right>
				{show_search && <input placeholder="shows name"  onChange={(e)=>setSearchTerm(e.target.value)} style={{
					lineHeight:"200%",
					padding:"0 1.2em",
					outline:"transparent",
					border:"transparent",
					borderRadius:"5px"

				}}/>}
				<span onClick={()=>{
					setShowSearch(true);
					// todo serach fro movies
				}}><BiSearchAlt style={{fontSize:"3rem"}}/></span>
				<Details>
					<User className="userPhoto" src={`/images/users/${photoURL}.png`}/>
					<Name className="displayName">{displayName}</Name>
				</Details>
			</Right>
			</Container>
			{mapper()}



	</React.Fragment>
} 