import Navbar from "./components/Navbar";
import SkillsCard from "./components/SkillsCard";
import styled from "styled-components";

const AllCards = styled.div`
  display: flex;
  flex-flow:row wrap;
  justify-content:center;
  margin-top:50px;
  @media only screen and (max-width:694px){
    margin-top:160px;
  }
`
const BiggerDiv = styled.div`
  height: 100%; 
`
const Skills = () => {
  return (
    <BiggerDiv >
      <Navbar></Navbar>
      <AllCards>
        <SkillsCard
          name='html'
          personalValue={50}
          laboralValue={0}
          img='./html-5.png'
        />
        <SkillsCard
          name='css'
          personalValue={60}
          laboralValue={0}
          img='./css.png'
        />
        <SkillsCard
          name='js'
          personalValue={40}
          laboralValue={0}
          img='./javascript.png'
        />
        <SkillsCard
          name='react'
          personalValue={70}
          laboralValue={0}
          img='./react.png'
        />
        <SkillsCard
          name='next'
          personalValue={40}
          laboralValue={0}
          img='./next.png'
        />
        <SkillsCard
          name='node-express-mongodb'
          personalValue={20}
          laboralValue={0}
          img='./mongo-node-express.png'
        />
      </AllCards>

    </BiggerDiv>

  )
}

export default Skills