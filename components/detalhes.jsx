import React from "react";
import styled from "styled-components";

const DetContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Coloca o modal acima do conteúdo */
`;

const DetPai = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const DetHeader = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const DetBody = styled.p`
  color: #555;
`;




function Detalhesaberto({titulo, empresa,local,descricao, abreDetalhes}){
    return(
        <>
            <DetContainer onClick={abreDetalhes}>
                <DetPai onClick={(e) => e.stopPropagation()}>
                    <DetHeader>{titulo}</DetHeader>
                    <DetBody>{descricao}</DetBody>
                    <DetBody>{empresa}</DetBody>
                    <DetBody>{local}</DetBody>
                </DetPai>
            </DetContainer>
        </>
    )
}

export default Detalhesaberto