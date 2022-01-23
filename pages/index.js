import Navbar from "./components/Navbar"
import MyProfile from "./MyProfile"
import styled from "styled-components"

const BiggerDiv = styled.div`
  height: 100%;
  
`
export default function Home() {
  return (
    <BiggerDiv>
      <Navbar></Navbar>
      <MyProfile></MyProfile>
    </BiggerDiv>
  )
}


