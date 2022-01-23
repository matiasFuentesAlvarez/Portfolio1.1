import Navbar from "./components/Navbar";
import styled from "styled-components";
import Image from 'next/image'
const BiggerDiv = styled.div`
  height: 100%; 
`

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items:center;
  text-align:center;
  padding:10px;
  margin: 5px;
  
  background: rgba( 10, 34, 57, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7px );
  -webkit-backdrop-filter: blur( 7px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  
  & p{
    color: #F1FFC4;
    font-family:roboto;
    letter-spacing:2px;
    margin: 30px;
  }
  & a{
    color: #F1FFC4;
    font-family:roboto;
    font-style:italic;
    letter-spacing:2px;
    margin: 30px;
  }
  & img{
    padding: 10px;
    height: 200px;
    width: 150px;
  }
  @media only screen and (max-width:375px){
    padding: 5px;
    & p{
      margin-left:5px;
      margin-right:5px;
    }
  }
`

const Div = styled.div`
  display: flex;
  flex-flow:column wrap;
  justify-content:center;
  align-content:center;
  height: 100%;
`

const Contact = () => {
  return (
    <BiggerDiv>
      <Navbar></Navbar>
      <Div>
        <Container>

          <Image src="/gmail.png" width={150} height={150}></Image>
          <p>zhema20141313@gmail.com</p>
        </Container>
        <Container>
          <Image src="/whatsapp.png" width={150} height={150} />
          <p>+56959670091</p>
        </Container>
        <Container>
          <Image src="/instagram.png" width={150} height={150} />
          <a href="https://www.instagram.com/_z.de.zema/" target="_blank">Instagram</a>
        </Container>
      </Div>
    </BiggerDiv >
  )
}

export default Contact