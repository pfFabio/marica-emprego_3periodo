import styled from "styled-components";
import {useState, useEffect} from 'react'

const Body = styled.div`
    padding-left: 9rem;
    font-family: Arial, sans-serif;
    background-color: #b6ddf1;
`
  
const Content = styled.main`
    width: 95%;
    padding: 2rem;
`
  
const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    
    input {
        width: 45%;
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
        
    select {
        width: 14rem;
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
`

  
const JobList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
`
  
const JobCard = styled.div`
    display: flex;
    background-color: white;
    border-radius: 1rem;
    padding: 1.5rem;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`
  
const JobLogo = styled.div`
    display: flex;
    width: 6rem;
    height: 6rem;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    background: #24305E;
`
  
 const JobDetails = styled.div`
    flex: 1;
    padding: 0 1.5rem;
`
  
const JobTitle = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    color: #f5425d;

`
  
  
const Company = styled.p`
    margin: 5px 0;
    font-weight: bold;
  `
  
const Info = styled.p`
    font-size: 1rem;
    color: #555;
`
  
const Stack = styled.p`
    font-size: 1rem;
    margin-top: 0.5rem;
`
  
const JobAction = styled.div`
    padding-left: 1rem;
`
  
const Btn = styled.a`
    background-color: #2e3a77;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 2rem;
    text-decoration: none;
    font-weight: bold;
`
  






function FeedCandidato(){

    const[busca, setBusca] = useState("");
    const[vagas, setVagas] = useState([]);

    useEffect(() =>{
        fetch('/vagas.json')
            .then(Response => Response.json())
            .then(data => setVagas(data))
    }, []);

    const vagasFiltradas = vagas.filter(vaga =>
    Array.isArray(vaga.habilidades) &&
    vaga.habilidades.some(habilidade => habilidade.toLowerCase().includes(busca.toLowerCase()))
    );

    return(
        <Body>
            <Content>
                <Filters>
                    <input id="BuscaVaga" type="text" placeholder="Digite a sua habilidade principal" 
                        value={busca}
                        onChange={e => setBusca(e.target.value)}/>
                    <input type="text" placeholder="📍 Localização"/>
                    <select><option>Carreira</option></select>
                    <select><option>Nível</option></select>
                    <select><option>Habilidades</option></select>
                    <select><option>Faixa salarial</option></select>
                    <select><option>Formato</option></select>
                </Filters>

                <JobList>
                    {vagasFiltradas.map(vaga => ( 
                        <JobCard key={vaga.id}>
                            <JobLogo>{vaga.logo}</JobLogo>
                            <JobDetails>
                                <JobTitle>{vaga.titulo}</JobTitle>
                                <Company>{vaga.empresa}</Company>
                                <Info>{vaga.nivel} 🔹 {vaga.formato} 🔹 {vaga.faixa_salarial}</Info>
                                <Stack>{vaga.habilidades.join(", ")}</Stack>
                            </JobDetails>
                            <JobAction><Btn href='/'>Ver Vaga</Btn></JobAction>
                        </JobCard>
                    ))}

                </JobList>
            </Content>
        </Body>
    )   
}

export default FeedCandidato