import React,{useEffect} from 'react';
import './Styles/styles.css'
import jumboData from './Fixture/jumbo' 
import Jumbotron from './Components/Jumbotron/jumbotron'
import Footer from './Components/footer'
import Faq from './Components/faq'
import Banner from './Components/banner'
import Suscribe from './Components/suscribe'
import useAuthListener from './hooks/use_auth_listener'
import useFirestoreData from './hooks/use_firestore_data';
import selectionFilter from './utils/selection-filter'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


const help = styled.div`
display:flex;
justify-content:center;
background-color:white;
`


function App(props) {
      // useAuthListener();
  // const {series} = useFirestoreData("series")
  // const {films} = useFirestoreData("films")
  // console.log("series,",series)
  // const slides = selectionFilter({series,films})
  // console.log("slides,",slides)
  let setup = JSON.parse(window.localStorage.getItem("setup_"));

  useEffect(()=>{
   
    
    document.querySelector(".help").style.height="10em"
   
    setTimeout(()=>{
    let hel = document.querySelector(".help")
    if(hel){
      hel.style.height="0";
    }
    
   


    },8000)

  },[])
  return (
    <div>
      <div  className="help" style={{
        position:"absolute",
        top:"1em",
        display:"flex",
        width:"100%",
        justifyContent:"center",
        height:"0",
        overflow:"hidden",
        transition: "all 0.9s linear" 


        // display:"none",

      }}
      >
       {!setup &&  <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
          // justifyContent:"center"

        }}>
          <p style={{
            backgroundColor:"orange",
            padding:"1em",
            zIndex:"1000",
            borderRadius:"10px",

          }}>login via email: admin@gmail.com & password: password or <Link to="/signup">signup</Link></p>
          <button style={{
            borderRadius:"5px",
            padding:".5em 1em",
            marginTop:".8em",
            zIndex:"2000",
            cursor:"pointer",
            backgroundColor:"orange"
          }} onClick={()=>{
              document.querySelector(".help").style.height="0";

              window.localStorage.setItem("setup_",JSON.stringify({"setup":true}));

          }}>Donot show me again </button>
        </div>
      }


      </div>
      <Banner pathname={props.location.pathname} />
     <Jumbotron.Container>
         {jumboData.map(jumbo=> 
          <Jumbotron key={jumbo.id} direction={jumbo.direction}>
            <Jumbotron.Pane>
            <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>

            <Jumbotron.Pane>
            <div className="img_video_container">
            <Jumbotron.Image className={`tv-imagee${jumbo.id}`} src={jumbo.image} alt={jumbo.alt}/>
            </div>



{/* 
                     <Jumbotron.Video src="/videos/bunny.mp4" autoPlay muted loop/>

 */}



            
            </Jumbotron.Pane>



          </Jumbotron>

        )}

          

     </Jumbotron.Container>
     <Faq/>
     <Suscribe/>
     
     <Footer/>
    </div>
  );
}

export default App;
