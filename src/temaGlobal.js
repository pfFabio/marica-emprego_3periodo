import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Montserrat", sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;
