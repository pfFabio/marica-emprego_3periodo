import React, { useState } from "react";
import styled from "styled-components";
import Carta from "./CartaVaga";

const FeedContainer = styled.div`
  max-width: 100%; 
  margin: 0 auto;
  margin-top: 100px;
  padding: 16px;
  box-sizing: border-box; 
  color:${({ theme }) => theme.primary}
`;

const jobsData = [
  {
    id: 1,
    title: "Desenvolvedor Frontend",
    company: "Tech Solutions",
    location: "Espraiado",
    description: "Procuramos um desenvolvedor com experiência em React.js."
  },
  {
    id: 2,
    title: "Analista de Dados",
    company: "DataCorp",
    location: "Itaipuaçu",
    description: "Análise de grandes volumes de dados usando Python e SQL."
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Creative Studio",
    location: "Remoto",
    description: "Designer de experiência do usuário para projetos web e mobile."
  }
];

const Feed = () => {
  const [trabaios, setTrabaio] = useState(jobsData);

  return (
    <FeedContainer>
      <h2>Vagas Disponíveis</h2>
      {trabaios.map((trabaio) => (
        <Carta
          key={trabaio.id}
          title={trabaio.title}
          company={trabaio.company}
          location={trabaio.location}
          description={trabaio.description}
        />
      ))}
    </FeedContainer>
  );
};

export default Feed;