import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";


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

const Cabeca = styled.header`
  position: fixed;
  left: 0;
  z-index: 100;
  max-width: ${({ abriu }) => (abriu ? "3rem" : "20rem")}; 
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  color:  ${({ theme }) => theme.primary};
  padding: 1rem;
  font-family: "Montserrat";
  height: 100vh;
`

const Logo = styled.img`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 3rem;
`

const Menu = styled.div`
  display: ${({ abriu }) => (abriu ? "none" : "flex")};
  flex-direction: column;
  justify-content: center; 
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  transform: ${({ abriu }) => (abriu ? "translateX(-10%)" : "translateX(0)")};
  transition: padding 0.3s ease, max-height 0.3s ease-in-out, transform 1s;
  font-weight: bold;
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.primary};
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &: hover{
      font-weight: bolder;
      color: ${({ theme }) => theme.hover};
    }
`
        
const ItemMenu = styled.div`
    width: 5rem;
    padding-top: 3rem;
    justify-content: center;
    text-align: center;
    @media (max-width: 768px) {
      width:100%;
  }
`


function Header({toggleTheme, escuro}) {
  const [taAberto, setTaAberto] = useState(true)

  const abreMenu = () =>{
    setTaAberto(!taAberto)
  }
 
    return (
    <Cabeca abriu = {taAberto}>
      <BotaoTema onClick={toggleTheme}>
          {escuro ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
      </BotaoTema>

      <a href="/">
        <Logo
          src= {taAberto ? 
              'https://github.com/pfFabio/images/blob/main/logo%20M+E.png?raw=true'
            :'https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/LOGO%20PROJETO.png?raw=true' }
        >
        </Logo>
      </a>

      <div onClick={abreMenu}> abre menu</div>

      <Menu abriu = {taAberto} >
        <ItemMenu>
          <StyledLink to="/">Sobre </StyledLink>
        </ItemMenu>
        <ItemMenu>
          <StyledLink>Cadastro </StyledLink> 
        </ItemMenu>
        <ItemMenu>
          <StyledLink>Login</StyledLink>
        </ItemMenu>
      </Menu>
    </Cabeca>
    )
};

export default Header;