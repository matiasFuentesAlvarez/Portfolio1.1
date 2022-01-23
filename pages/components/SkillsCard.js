import styled from "styled-components";
import { useEffect } from "react";
const Container = styled.div`
  display: flex;
  flex-flow:column wrap;
  align-content:center;
  text-align:center;
  justify-content:center;
  height: 500px;
  width: 400px;
  padding:10px;
  margin: 15px;
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
  }
  &:hover{
    transform:scale(1.05,1.05);
    box-shadow: 0 12px 36px 0 rgba( 31, 38, 135, 0.6 );
    border: 1px solid rgba( 255, 255, 255, 0.3 );
    transition: 1s ease-in-out;
    & img{
      transform: scale(1.05,1.05);
      transition: 1s ease-in-out;
    }
    & p{
      transform: scale(1.05,1.05);
      transition: 1s ease-in-out;
    }
    & div{
      transform: scale(1.05,1.05);
      transition: 1s ease-in-out;
    }
  
  }
  @media only screen and (max-width:425px){
    height: 500px;
    width: 300px;
    
  }
`
const Border = styled.div`
  margin: 20px auto;
  padding: 1px;
  width: 100%;
  max-width: 250px;
  border: 3px solid #ddd;
  height: 30px;
  border-radius: 18px;
  background-image: linear-gradient(45deg,rgba(255,0,0,0.25),rgba(255,233,0,0.25),rgba(0,255,0,0.25));
  
}
`
const Inside = styled.div.attrs(props => ({}))`
  height: 100%;
  width: ${props => props.value}%;
  background-color: rgba(4,96,219,1);
  border-radius: 15px;
`

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  width: 100%;
  margin-bottom:30px;
  & img{
    width: 100px;
    height: 100px;
  }
`

const SkillsCard = (props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={props.img}></img>
      </ImageContainer>
      <p>Personal Experience</p>
      <Border>
        <Inside value={props.personalValue}></Inside>
      </Border>
      <p>Laboral Experience</p>
      <Border>
        <Inside value={props.laboralValue}></Inside>
      </Border>
    </Container>


  )
}

export default SkillsCard;
