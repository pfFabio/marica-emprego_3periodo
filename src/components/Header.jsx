import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";


const BotaoTema = styled.button`
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

const Cabeca = styled.header`
    position: fixed;
    top: 0;
    left; 0;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.primary};
    padding: 1rem;
    font-family: "Montserrat";
    height: 2 rem;
`

const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const Menu = styled.ul`
   
  @media (max-width: 768px){ 
    max-height: ${({ abriu }) => (abriu ? "100%" : "0px")}; 
    padding: ${({ abriu }) => (abriu ? "1rem" : "0rem")}; 
    background-color: ${({ theme }) => theme.background};
    overflow: hidden;
    flex-direction: column; 
    position: absolute;
    top: 60px;
    right: 30px;
    z-index: 1000;

    border-radius: 8px;
    transition: padding 0.3s ease, max-height 0.3s ease-in-out;

  };
  @media(min-width: 769px){
    display: flex;
  }
  justify-content: center;
  list-style: none;
`

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  margin-right: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;


const StyledLink = styled(Link)`
    color: ${({theme}) => theme.primary};
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    &: hover{
      font-weight: bolder;
      color: ${({ theme }) => theme.hover};
    }
`
        
const Li = styled.li`
    width: 5rem;
    padding: 0.5rem;
    @media (max-width: 768px) {
      width:100%;
  }
`


function Header({toggleTheme, escuro}) {
  const [taAberto, setTaAberto] = useState(false)

  const abreMenu = () =>{
    setTaAberto(!taAberto)
  }
 
    return (
    <Cabeca >

        <BotaoTema onClick={toggleTheme}>
            {escuro ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </BotaoTema>
        <Logo>
            <a href="/">
                <img 
                src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/LOGO%20PROJETO.png?raw=true" 
                alt="LOGO" 
                height='50 rem' />
            </a>
        </Logo>

        <Hamburger onClick={abreMenu}>
          <i className="fas fa-bars"></i>
        </Hamburger>

        <Menu abriu = {taAberto}>
        <Li>
          <StyledLink to="/">Sobre</StyledLink>
        </Li>
        <Li>
          <StyledLink to="cadastro">Cadastro</StyledLink>
        </Li>
        <Li>
          <StyledLink to="feed">Feed</StyledLink>
        </Li>
        </Menu>
    </Cabeca>
    )
};

export default Header;