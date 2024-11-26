import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main";
import Cadastro from "./components/Cadastro";
import Feed from "./components/Feed";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./temaGlobal";

function App() {
  const [escuro, setEscuro] = useState(false);

  const toggleTheme = () => setEscuro(!escuro);

  return (
    <Router>
      <ThemeProvider theme={escuro ? darkTheme : lightTheme}>
          <GlobalStyle/>
          
          <Header toggleTheme={toggleTheme} escuro = {escuro}/>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
          
          <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
