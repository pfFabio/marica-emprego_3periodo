import React, { useState } from "react";
import styled from "styled-components";
import Detalhesaberto from "./detalhes.jsx"

const Cartinha = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%; 
  box-sizing: border-box; 
`;

const Titulo = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color:  ${({ theme }) => theme.primary}
`;

const Detalhes = styled.p`
  margin: 8px 0;
  color:  ${({ theme }) => theme.text}
`;

const Botao = styled.button`
  background-color: ${({ theme }) => theme.formBG};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


const Carta = ({ title, company, location, description }) => {
    const [detalhesAbertos, setDetalhes] = useState(false)

    const abreDetalhes = () =>{
        setDetalhes(!detalhesAbertos)
    }

  return (
    <>
        <Cartinha>
        <Titulo>{title}</Titulo>
        <Detalhes>Empresa: {company}</Detalhes>
        <Detalhes>Localização: {location}</Detalhes>
        <Detalhes>{description}</Detalhes>
        <Botao onClick={abreDetalhes}>Ver Detalhes</Botao>
        </Cartinha>
        { detalhesAbertos && (
            <Detalhesaberto
                titulo = {title}
                empresa = {company}
                local = {location}
                descricao = {description}
                abreDetalhes = {abreDetalhes}
            />)
        }   
    </>
  );
};

export default Carta;