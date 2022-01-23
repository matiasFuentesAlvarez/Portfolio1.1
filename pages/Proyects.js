import Navbar from "./components/Navbar";
import styled from "styled-components";
import ProyectCard from "./components/ProyectCard";
const BiggerDiv = styled.div`
  height: 100%; 
`
const AllCards = styled.div`
  display: flex;
  flex-flow:row wrap;
  justify-content:center;
  margin-top:50px;
  @media only screen and (max-width:694px){
    margin-top:160px;
  }
`
const Proyects = () => {
  return (

    <BiggerDiv>
      <Navbar></Navbar>
      <AllCards>
        <ProyectCard
          img='./weather-app.jpg'
          desc='A simple weather app build with NextJS-React-StyledComponents'
          link='https://weather-app-self-gamma.vercel.app'
        />
      </AllCards>
    </BiggerDiv>
  )
}
export default Proyects;
