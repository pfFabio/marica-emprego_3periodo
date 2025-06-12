import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Montserrat", sans-serif;
    transition: background-color 0.3s, color 0.3s;
    }
  #root{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;


export default GlobalStyle;
