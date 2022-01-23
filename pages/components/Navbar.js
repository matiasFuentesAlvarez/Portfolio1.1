import styled from 'styled-components'
import Link from "next/link"

const Container = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  height:10%;
  width:100%;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  background-color:#0A2239;
  & h1{
    color: #F1FFC4;
    margin-left:30px ;
    letter-spacing:2px;
  }
  & h2{
    color: #F1FFC4;
    margin-left:300px;
    letter-spacing:2px;
    font-style:italic;
  }
  & a{
    color: #F1FFC4;
    
    
    letter-spacing:2px;
    
  }
  & div.allLinks{
    display: flex;
    flex-flow:row wrap;
    position:absolute;
    right:0;
    margin-right:20px;
  }
  @media only screen and (max-width:1440px){
    & h1{
      font-size:28px;
    }
    & h2{
      margin-left:200px;
      font-size:20px;
    }
  }
  @media only screen and (max-width:1200px){
    & h2{
      margin-left:100px;
    }
  }
  @media only screen and (max-width:1100px){
    & h2{
      margin-left:50px;
    }
  }
  @media only screen and (max-width:934px){
    & h1{
      margin-left:10px;
      font-size:20px;
    }
    & h2{
      margin-left:40px;
      font-size:14px;
    }
  }
  @media only screen and (max-width:768px){
    & div.allLinks{
      display: none;
    }
  }
  @media only screen and (max-width:472px){
    & h1{
      margin-left:5px;
      font-size:16px;
    }
    & h2{
      margin-left:20px;
      font-size:10px;
    }
  } 
  @media only screen and (max-width:375px){
    & h1{
      margin-left:45px;
    }
    & h2{
      display: none;
    }
  }
  
`
const LinkContainer = styled.div`
  display: flex;
  flex-flow:row wrap;
  align-content: center;
  justify-content:center;
  height: 50px;
  width: 120px;
  margin:0px 10px 0px 10px;
  border-radius:40px ;
  background-color:#132E32;
  border: 1px solid rgba(0,0,0,0.1);
  &:hover{
    box-shadow:1px 2px 4px rgba( 31, 38, 135, 0.37 );
    border: 1px solid rgba(255,255,255,0.1);
  }
  @media only screen and (max-width:1440px){
    height: 40px;
    width: 110px;
    & a{
      font-size:14px;
    }
  }
  @media only screen and (max-width:1100px){
    margin: 0px 5px 0px 5px;
    width: 90px;
  }
  @media only screen and (max-width:934px){
    margin: 0px 2px 0px 2px;
    width: 80px;
    & a{
      font-size:12px;
    }
  }
`
const DropDown = styled.div`
position:absolute;
    right:0;
    margin-right:30px;
  @media only screen and (min-width:769px){
    display: none;
  }
  @media only screen and (max-width:769px){    
    & img {
      width: 40px;
      height: 40px;
    }
    .dropdown-btn{
      padding: 16px;
      border: none;
      cursor: pointer;
      background-color:rgba(0,0,0,0);
    }

    .dropdown-content{
      display: none;
      padding: 10px 10px;
      position: absolute;
      right: 0px;
      background-color: #0A2239;
      min-width: 130px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
      border-radius:5px ;
      margin-top:0px;
      margin-right:-20px;
    }
    &.dropdown:hover .dropdown-content{
      display: flex;
      flex-flow:column wrap;
      justify-content:center;
      align-content:center;
    }
    &.dropdown-content:hover {
      display: flex;
      flex-flow:column wrap;
      justify-content:center;
      align-content:center;
    } 
  }
  @media only screen and (max-width:472px){
    & img{
      width: 30px;
      height: 30px;
    }
  }
`

const Navbar = () => {
  return (
    <Container>
      <h1>Matias Fuentes</h1>
      <div className='allLinks'>
        <LinkContainer>
          <Link href='./Proyects'>Proyects</Link>
        </LinkContainer>
        <LinkContainer>
          <Link href='./Skills'>Skills</Link>
        </LinkContainer>
        <LinkContainer>
          <Link href='./Contact'>Contact</Link>
        </LinkContainer>
        <LinkContainer>
          <Link href='./'>Home</Link>
        </LinkContainer>
      </div>
      <DropDown className="dropdown">
        <button className="dropdown-btn" ><img src="./drop-down-menu.png" /></button>
        <div className="dropdown-content">
          <LinkContainer>
            <Link href='./Proyects'>Proyects</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href='./Skills'>Skills</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href='./Contact'>Contact</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href='./'>Home</Link>
          </LinkContainer>
        </div>
      </DropDown>
      <h2>Front-End Developer</h2>
    </Container>
  )
}

export default Navbar