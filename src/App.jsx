import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CadastroEmpresa from "./components/CadastroEmpresa";
import CadastroCandidato from "./components/CadastroCandidato";
import FeedCandidato from "./components/FeedCandidato";
import FeedEmpresa from "./components/FeedEmpresa";
import Login from "./components/Login";
import PerfilEmpresa from "./components/PerfilEmpresa";
import CadastrarVaga from "./components/CadastrarVaga";
import PerfilCandidato from "./components/PerfilCandidato";
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
              <Route path="/cadastroempresa" element={<CadastroEmpresa />} />
              <Route path="/cadastrocandidato" element={<CadastroCandidato />} />
              <Route path="/cadastrarvaga" element={<CadastrarVaga />} />
              <Route path="/perfilempresa" element={<PerfilEmpresa />} />
              <Route path="/perfilcandidato" element={<PerfilCandidato />} />
              <Route path="/feedcandidato" element={<FeedCandidato />} />
              <Route path="/feedempresa" element={<FeedEmpresa />} />
              <Route path="/login" element={<Login />} />
            </Routes>

            <Footer/>

      </ThemeProvider>
    </Router>
  );
}

export default App;
