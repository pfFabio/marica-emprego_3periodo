import React from 'react';
import styled from 'styled-components';
import logoImg from './img/ME+.png';

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f5f7;
`;

const MainMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const MenuLink = styled.a`
  color: #1d2951;
  text-decoration: none;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  position: relative;

  &:nth-of-type(1)::after,
  &:nth-of-type(2)::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #f9e688;
    margin: 5px auto 0;
    width: 70%;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: #c6e2f5;
`;

const LeftPanel = styled.div`
  width: 240px;
  background-color: #1d2951;
  margin: 10px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const MenuItem = styled.div`
  background-color: white;
  color: #1d2951;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const MainPanel = styled.main`
  flex: 1;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
`;

const Title = styled.h1`
  color: #1d2951;
  font-size: 32px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: #1d2951;
  font-weight: bold;
  max-width: 600px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Content>
        <LeftPanel>
          <MenuItem>Atualizar / Verificar seu perfil</MenuItem>
          <MenuItem>Candidaturas</MenuItem>
          <MenuItem>Mensagens</MenuItem>
          <MenuItem>Alertas</MenuItem>
          <MenuItem>Salários</MenuItem>
          <MenuItem>Achar vagas</MenuItem>
          <MenuItem>Avaliações das Empresas</MenuItem>
          <MenuItem>Configurações</MenuItem>
        </LeftPanel>

        <MainPanel>
          <Title>BEM-VINDO DE VOLTA!</Title>
          <Message>
            "CADA PEQUENO PASSO NOS APROXIMA DO NOSSO GRANDE OBJETIVO. INSPIRE E SEJA INSPIRADO; AQUI TODOS SÃO CAPAZES."
          </Message>
        </MainPanel>
      </Content>
    </Container>
  );
};

export default Dashboard;
