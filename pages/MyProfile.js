import styled from "styled-components"
import { useEffect } from "react"
const Container = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  align-content:center;
  height:90%;

  & img {
    width:600px;
    height:600px;
    margin-right:20px;
  }
  @media only screen and (max-width:1440px){
   & img{
     width: 500px;
     height: 500px;
   }
  }
  @media only screen and (max-width:1024px){
   & img{
     width: 400px;
     height: 400px;
   }
  }
  @media only screen and (max-width:768px){
   & img{
     width: 330px;
     height: 330px;
   }
  }
  @media only screen and (max-width:425px){
   & img{
     width: 250px;
     height: 250px;
   }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-flow:column wrap;
  justify-content:center;
  text-align:center;
  margin-left:20px;
  padding: 80px;
  background: rgba( 10, 34, 57, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7px );
  -webkit-backdrop-filter: blur( 7px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  & h1{
    color: #F1FFC4;
    letter-spacing:4px;
  }

  & h2{
    color: #F1FFC4;
    letter-spacing:4px;
    font-style:italic;
  }
  @media only screen and (max-width:1440px){
    padding: 40px;
    & h1{
      font-size:22px;
    }
    & h2{
      font-size:20px;
    }
  }
  @media only screen and (max-width:1040px){
    padding: 25px;
    & h1{
      font-size:16px;
    }
    & h2{
      font-size:14px;
    }
  }
  @media only screen and (max-width:768px){
    
    padding: 25px;
    & h1{
      font-size:12px;
    }
    & h2{
      font-size:10px;
    }
  } 
  
`

const Div = styled.div`
  display: flex;
  flex-flow:column wrap ;
  justify-content:center;
`



const MyProfile = () => {
  return (

    <Container>
      <img src="./programmer.png"></img>
      <Div>
        <TextContainer>
          <h1>Welcome to my</h1>
          <h1>portfolio website!</h1>
          <h2>Here you could see</h2>
          <h2>a preview my lastest jobs.</h2>
          <h2>~Always looking forward...</h2>
          <h2>to the future~</h2>
        </TextContainer>
      </Div>
    </Container >

  )


}

export default MyProfile