import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-flow:column wrap;
  align-content:center;
  text-align:center;
  justify-content:center;
  height: 600px;
  width: 800px;
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
  & a{
    color: #F1FFC4;
    font-family:roboto;
    letter-spacing:2px;
    font-style:italic;
    font-weight:900;
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
    & a{
      transform: scale(1.05,1.05);
      transition: 1s ease-in-out;
    }
  
  
  }
  @media only screen and (max-width:768px){
    height: 400px;
    width: 600px;
  }
  @media only screen and (max-width:441px){
    height: 300px;
    width: 500px;
  }
  @media only screen and (max-width:425px){
    height: 500px;
    width: 300px;
    
  }
`
const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  width: 100%;
  margin-bottom:30px;
  & img{
    width: 600px;
    height: 400px;
  }
  
  @media only screen and (max-width:768px){
    & img{
      width: 400px;
      height: 200px;
    }
  }
  @media only screen and (max-width:441px){
    & img{
      width: 300px;
      height: 100px;
    }
  }
`
const ProyectCard = (props) => {
  console.log(props);
  return (
    <Container>
      <ImageContainer>
        <img src={props.img}></img>
      </ImageContainer>
      <p>{props.desc}</p>
      <a href={props.link} target="_blank">Visit my weather app!</a>
    </Container>
  )
}

export default ProyectCard;
