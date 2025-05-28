import styled from "styled-components";
import {useState, useEffect} from 'react'


const Body = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100vw;
    background-color: #6bdae2;
`
    
const ConteudoPrincipal = styled.div`
    width: 80%;
    padding: 1.8rem;
`
  
const CaixaPesquisa = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto 4rem;
`
  
const Input = styled.input`
    width: 100%;
    padding: 1.5rem;
    border-radius: 20px;
    border: none;
    font-size: 1rem;
`
  

const ContainerCartoes = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  `
  
const Cartao = styled.div`
    background-color: #f9f6ff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;


    button, a {
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    text-decoration:none;
    }


    botao-link {
    width: auto !important;
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center !important;
    margin-top: 3rem !important;
    padding: 0.3rem 2.5rem !important;
    font-size: 1.0rem !important;
    background-color: white;
    border: 2px solid #2f6da0;
    color: #2f6da0;
    border-radius: 5rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`
  
const CabecalhoCartao = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`
  
const Avatar = styled.div`
    background-color: #c4aaf7;
    color: #1f1542;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.8rem;
    h3{
        font-size: 1rem;
        margin: 0;
    }
    small{
        color: #555;
    }
    p{
        font-size: 0.9rem;
        color: #13133a;
    }
`

  
const BotoesCartao = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 0.5rem;
`
   


const BotaoAprovar = styled.button`
    background-color: #432a7e;
    color: white;
    border: 2px solid #ffffff;
`


const BotaoRejeitar = styled.button`
    background-color: #ffffff;
    color:  #2f6da0;
    border: 2px solid  #2f6da0; 
`


/*.cartao {
    position: relative;   
    overflow: hidden;     
    padding-top: 0.5rem;      
  }
  
  .cartao::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;                     
    background-color: #b2cacaad;      
    border-top-left-radius: 10px;    
    border-top-right-radius: 10px;
  }

  .cabecalho-cartao > * {
    position: relative;
    z-index: 1;
  }
*/  








function FeedEmpresa(){
    const[candidatos, setCandidatos] = useState([])
    
    useEffect(() =>{
        fetch('/candidatos.json')
            .then(Response => Response.json())
            .then(data => setCandidatos(data))
    }, []);

    return(
        <Body>
        
            <ConteudoPrincipal>
                <CaixaPesquisa>
                    <Input type="text" placeholder="Digite o tipo de candidato que está buscando"/>
                </CaixaPesquisa>

                <ContainerCartoes>
                    {candidatos.map(candidato =>(
                
                    <Cartao key = {candidato.id}>
                        <CabecalhoCartao>
                            <Avatar>{candidato.avatar}</Avatar>
                            <div>
                                <h3>{candidato.nome}</h3>
                                <small>{candidato.vaga}</small>
                            </div>
                        </CabecalhoCartao>
                        <p>{candidato.descricao}</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <BotoesCartao>
                            <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                            <BotaoAprovar>Aprovar</BotaoAprovar>
                        </BotoesCartao>
                    </Cartao>
                    ))}
                </ContainerCartoes>
                
            </ConteudoPrincipal>
        </Body>
    )
}

export default FeedEmpresa;