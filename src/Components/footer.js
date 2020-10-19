import React,{Fragment,useEffect,useState} from 'react';
import styled from 'styled-components/macro'


const Title = styled.p`
font-size:0.8rem;

margin-bottom:1.4em;
`;

const Row = styled.div`
  line-height:200%;
  font-size:0.8rem;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;

const InnerRow = styled.div`
  flex:1;
  display:flex;
  flex-direction:row;
  justify-content:space-around;


  @media(max-width:576px){
    flex-direction:column;
  justify-content:flex-start;

  }
`
const Column = styled.div`
  display:flex;
  flex-direction:column;
`;

const Link = styled.a`
text-decoration:none;
color:#bfbfbf;

 &:hover {
        text-decoration:underline;
    }


`;
const Text = styled.p`
margin-top:1.4em;

  font-size:0.8rem;
`;
const FooterStyled = styled.div`

color:#bfbfbf;
max-width:880px;
margin:0 auto 0 auto;
// background-color:white;
// border-top: 10px solid red;
margin-top:5em;


@media(max-width:992px){
  padding:0 3em;
}

`
const Container = styled.div`
border-top:${props=>props.pathname=="/signin"? null: "8px solid #222"};
// margin-bottom:3em;
padding-bottom:3em;
margin-top:${props=>props.pathname=="/signin"? "3em":null};
background-color:${ props=>props.pathname=="/signin"? "rgba(0,0,0,0.5)" : null};

  @media(max-width:768px){
    border-top:${props => {return props.pathname=="/signin" ? "2px solid #222": null}
  }
}
  
`



export default function Footer(props) {
  const [size,setSize] = useState(window.innerWidth);
  console.log("size",size)


  const checkSize =() => setSize(window.innerWidth);

  useEffect(()=>{
    window.addEventListener("resize",checkSize)


    //cleanup function
    // everytime the useEffect is called, the cleanup for previous useEffect is done and 
    // then only new useEffect execution takes place. 
    return ()=>{
      window.removeEventListener("resize",checkSize)
    }
  })  
  //  or we could hvae use },[]) // empty dependency


  return (

    <Container pathname={props.pathname}>
   <FooterStyled>
      <Title>Questions? Contact us.</Title>
      <Row>
        <InnerRow>
        <Column>
          <Link href="#">FAQ</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">Ways to Watch</Link>
          <Link href="#">Corporate Information</Link>
          <Link href="#">Netflix Originals</Link>
        </Column>

        <Column>
          <Link href="#">Help Centre</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Contact Us</Link>
        </Column>
        </InnerRow>

        <InnerRow >
        <Column>
          <Link href="#">Account</Link>
          <Link href="#">Redeem gift cards</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Speed Test</Link>
        </Column>

         <Column>
          <Link href="#">Media Centre</Link>
          <Link href="#">Buy gift cards</Link>
          <Link href="#">Cookie Preferences</Link>
          <Link href="#">Legal Notices</Link>
        </Column>
        </InnerRow>
      </Row>
      <Text>Netflix Nepal</Text>
    </FooterStyled>
    </Container>

      
  );
}

