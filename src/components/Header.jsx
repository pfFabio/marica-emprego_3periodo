import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";
import {BiHome, BiSolidUserPlus, BiUserCircle } from "react-icons/bi";
import { AiFillLeftCircle, AiOutlineUser } from "react-icons/ai";


const BotaoTema = styled.button`
  position: absolute;
  bottom: 5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary}; /* Cor do ícone */
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffa500; 
  }

  &:focus {
    outline: none;
  }
`;

const BotaoPerfil = styled.div`
  position: absolute;
  bottom: 7rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  font-size: 1.5rem;


  &:hover {
    background-color: #ffa500; 
  }
`

const Cabeca = styled.header`
  position: fixed;
  left: 0;
  z-index: 100;
  width: ${({ abriu }) => (abriu ? "2rem" : "8.5rem")}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundHeader};
  color:  ${({ theme }) => theme.primary};
  padding: 1rem;
  font-family: "Montserrat";
  height: 100vh;
  transition: 0.3s ease-in-out;
`

const Logo = styled.img`
  position: absolute;
  top: ${({ abriu }) => (abriu ? "0" : "1rem")};
  width: ${({ abriu }) => (abriu ? "4rem" : "8rem")};
  transition: src 0.3s ease-in-out;
`

const StyledLink = styled(Link)`
    display:  flex;
    color: ${({theme}) => theme.primary};
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    &: hover{
      font-weight: bolder;
      color: ${({ theme }) => theme.hover};
    }
`

const StyledLinkIcon = styled(Link)`
    display:  flex;
    color: ${({theme}) => theme.primary};
    text-decoration: none;
    font-size: 1.6rem;
    transition: 0.3s ease-in-out;
    &: hover{
      font-weight: bolder;
      color: ${({ theme }) => theme.hover};
    }
`

const Menu = styled.div`
  display: flex;
  width: ${({ abriu }) => (abriu ? "0" : "100%")};
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding-top: 4rem;
  color:  #24305E;
  font-weight: bold;
  transition: 1s;
`

const SetaMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  cursor: pointer;
  background: white;
  border: none;
  color: black;
  position: absolute;
  left: ${({ abriu }) => (abriu ? "2.8rem" : "9.5rem")}; 
  top: 8%; 
  border-radius: 50%;
  transform: rotate(${({ abriu }) => (abriu ? "360" : "180")}deg);
  transition: 0.3s ease-in-out, transform 0.5s; 
 
  `

const BarraMenu = styled.div`
  border-radius: 8px;
  height: 0.2rem;
  width: 90%;
  background-color: yellow;
  `
  
const ItemMenu = styled.div`
  cursor: pointer;
  display: ${({ abriu }) => (abriu ? "none" : "flex")};
  width:  ${({ abriu }) => (abriu ? "0" : "100%")};
  height: 5rem;
  justify-content: center;
  align-items: center;
  opacity: ${({ abriu }) => (abriu ? "0" : "100%")};
  transition: opacity 0.3s;
`

const ItemMenuIcon = styled.div`
  cursor: pointer;
  display: ${({ abriu }) => (!abriu ? "none" : "flex")};
  width:  ${({ abriu }) => (!abriu ? "0" : "100%")};
  height: 5rem;
  justify-content: center;
  align-items: center;
  opacity: ${({ abriu }) => (!abriu ? "0" : "100%")};
  transition: opacity 0.3s;
`


function Header({toggleTheme, escuro}) {
  const [taAberto, setTaAberto] = useState(true)

  const abreMenu = () =>{
    setTaAberto(!taAberto)
  }
 
    return (
    <Cabeca abriu = {taAberto}>

      <Logo abriu = {taAberto}
        src= {taAberto ? 
            'https://github.com/pfFabio/images/blob/main/logo%20M+E.png?raw=true'
          :'https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/LOGO%20PROJETO.png?raw=true' }
      >
      </Logo>
        

      <BotaoPerfil>
        <AiOutlineUser />
      </BotaoPerfil>

      <BotaoTema onClick={toggleTheme}>
          {escuro ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
      </BotaoTema>

      <SetaMenu abriu = {taAberto} onClick={abreMenu}> 
        <AiFillLeftCircle/> 
      </SetaMenu>

      <Menu abriu = {taAberto} >
        <ItemMenuIcon  abriu = {taAberto}>
          <StyledLinkIcon to="/"><BiHome/></StyledLinkIcon>
        </ItemMenuIcon>

        <ItemMenu  abriu = {taAberto}>
          <StyledLink to="/">Sobre</StyledLink>
        </ItemMenu>

        <BarraMenu />

        <ItemMenuIcon  abriu = {taAberto}>
          <StyledLinkIcon to='/cadastrocandidato'><BiSolidUserPlus/></StyledLinkIcon> 
        </ItemMenuIcon>
        <ItemMenu  abriu = {taAberto}>
          <StyledLink to='/cadastrocandidato'>Cadastro</StyledLink> 
        </ItemMenu>

        <BarraMenu />

        <ItemMenuIcon  abriu = {taAberto}>
          <StyledLinkIcon to='/feed'><BiUserCircle/></StyledLinkIcon>
        </ItemMenuIcon>
        <ItemMenu  abriu = {taAberto}>
          <StyledLink to='/feed'>Login</StyledLink>
        </ItemMenu>



      </Menu>
    </Cabeca>
    )
};

export default Header;