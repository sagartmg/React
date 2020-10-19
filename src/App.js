import React from 'react';
import './Styles/styles.css'
import jumboData from './Fixture/jumbo' 
import Jumbotron from './Components/Jumbotron/jumbotron'
import Footer from './Components/footer'
import Faq from './Components/faq'
import Banner from './Components/banner'
import Suscribe from './Components/suscribe'

function App(props) {
  return (
    <div>
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
