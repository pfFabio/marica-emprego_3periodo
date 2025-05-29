import styled from "styled-components";

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
    return(
        <Body>
            <Content>
                <Filters>
                    <input type="text" placeholder="🔍 Buscar vagas"/>
                    <input type="text" placeholder="📍 Localização"/>
                    <select><option>Carreira</option></select>
                    <select><option>Nível</option></select>
                    <select><option>Habilidades</option></select>
                    <select><option>Faixa salarial</option></select>
                    <select><option>Formato</option></select>
                </Filters>

                <JobList>
                    <JobCard>
                        <JobLogo>#LOGO#<br/>#LOGO#<br/>#LOGO#</JobLogo>
                        <JobDetails>
                            <JobTitle>Desenvolvedor Full Stack</JobTitle>
                            <Company>NextBit Solutions</Company>
                            <Info>Pleno 🔹 Remoto 🔹 R$6.000,00 - 9.000,00</Info>
                            <Stack><strong>Stacks</strong> Node.js MongoDB GIT</Stack>
                        </JobDetails>
                        <JobAction><Btn href='/'>Ver Vaga</Btn></JobAction>
                    </JobCard>

                    <JobCard>
                        <JobLogo>#LOGO#<br/>#LOGO#<br/>#LOGO#</JobLogo>
                        <JobDetails>
                            <JobTitle>Cientista de Dados</JobTitle>
                            <Company>IronGate Cyber</Company>
                            <Info>Sênior 🔹 Remoto 🔹 R$8.000,00 - 14.000,00</Info>
                            <Stack><strong>Stacks</strong> Python NumPy SQL</Stack>
                        </JobDetails>
                        <JobAction><Btn href='/'>Ver Vaga</Btn></JobAction>
                    </JobCard>

                    <JobCard>
                        <JobLogo>#LOGO#<br/>#LOGO#<br/>#LOGO#</JobLogo>
                        <JobDetails>
                            <JobTitle>Analista de Suporte Técnico</JobTitle>
                            <Company>DevScape</Company>
                            <Info>Júnior 🔹 Presencial 🔹 R$2.000,00 - 3.500,00</Info>
                            <Stack><strong>Stacks</strong> Windows AnyDesk Firewall</Stack>
                        </JobDetails>
                        <JobAction><Btn href='/'>Ver Vaga</Btn></JobAction>
                    </JobCard>

                    <JobCard>
                        <JobLogo>#LOGO#<br/>#LOGO#<br/>#LOGO#</JobLogo>
                        <JobDetails>
                            <JobTitle>Desenvolvedor(a) Mobile</JobTitle>
                            <Company>MobixLabs</Company>
                            <Info>Sênior 🔹 Híbrido 🔹 R$10.000,00 - 16.000,00</Info>
                            <Stack><strong>Stacks</strong> Flutter Node.js Google Play Console</Stack>
                        </JobDetails>
                        <JobAction><Btn href='/'>Ver Vaga</Btn></JobAction>
                    </JobCard>
                </JobList>
            </Content>
        </Body>
    )   
}

export default FeedCandidato