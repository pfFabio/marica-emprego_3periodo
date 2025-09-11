import styled from "styled-components";
import {useState, useEffect} from 'react'


const Body = styled.div`
    display: flex;
    justify-content: center;
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

`
const  BotaoLink = styled.a`
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
    &:hover {
        background-color:rgb(230, 229, 229);
    }
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
    &:hover {
        background-color: #5b3ea1;
    }
`


const BotaoRejeitar = styled.button`
    background-color: #ffffff;
    color:  #2f6da0;
    border: 2px solid  #2f6da0; 
    &:hover {
        background-color:rgb(230, 229, 229);
    }
`


const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalCard = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    min-width: 320px;
    max-width: 90vw;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const ModalClose = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #432a7e;
    cursor: pointer;
`;




function FeedEmpresa(){
    const[candidatos, setCandidatos] = useState([])
    const[busca, setBusca] = useState("");
    const[modalCandidato, setModalCandidato] = useState(null);
    
    useEffect(() =>{
        fetch('/candidatos.json')
            .then(Response => Response.json())
            .then(data => setCandidatos(data))
    }, []);

    const candidatosFiltrados = candidatos.filter(candidato =>
        Array.isArray(candidato.vagas) &&
        candidato.vagas.some(vaga => vaga.toLowerCase().includes(busca.toLowerCase()))
    );

    return(
        <Body>
        
            <ConteudoPrincipal>
                <CaixaPesquisa>
                    <Input id="BuscaVaga" type="text" placeholder="Digite a vaga que deseja preencher" 
                        value={busca}
                        onChange={e => setBusca(e.target.value)}/>
                </CaixaPesquisa>

                <ContainerCartoes>
                    {candidatosFiltrados.map(candidato =>(
                        <Cartao key = {candidato.id}>
                            <CabecalhoCartao>
                                <Avatar>{candidato.avatar}</Avatar>
                                <div>
                                    <h3>{candidato.nome}</h3>
                                    <small>{candidato.vagas}</small>
                                </div>
                            </CabecalhoCartao>
                            <p>{candidato.descricao}</p>
                            <BotaoLink onClick={e => {e.preventDefault(); setModalCandidato(candidato);}} >Ver Perfil</BotaoLink>
                            <BotoesCartao>
                                <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                                <BotaoAprovar>Aprovar</BotaoAprovar>
                            </BotoesCartao>
                        </Cartao>
                    ))}
                </ContainerCartoes>

                {modalCandidato && (
                    <ModalOverlay onClick={() => setModalCandidato(null)}>
                        <ModalCard onClick={e => e.stopPropagation()}>
                            <ModalClose onClick={() => setModalCandidato(null)} title="Fechar">&times;</ModalClose>
                            <CabecalhoCartao>
                                <Avatar>{modalCandidato.avatar}</Avatar>
                                <div>
                                    <h3>{modalCandidato.nome}</h3>
                                    <small>{Array.isArray(modalCandidato.vagas) ? modalCandidato.vagas.join(", ") : modalCandidato.vagas}</small>
                                </div>
                            </CabecalhoCartao>
                            <p><strong>Descrição:</strong> {modalCandidato.descricao}</p>
                            <p><strong>Competências:</strong> {modalCandidato.competencias && modalCandidato.competencias.join(", ")}</p>
                            <p><strong>Telefone:</strong> {modalCandidato.telefone}</p>
                            <p><strong>Endereço:</strong> {modalCandidato.endereco}</p>
                        </ModalCard>
                    </ModalOverlay>
                )}
                
            </ConteudoPrincipal>
        </Body>
    )
}

export default FeedEmpresa;