import styled from "styled-components";


const Body = styled.div`
    display: flex;
    height: 100%;
    background-color: #6bdae2;
`

const ConteudoPrincipal = styled.div`
    flex: 1;
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
    return(
        <Body>
        
            <ConteudoPrincipal>
                <CaixaPesquisa>
                    <Input type="text" placeholder="Digite o tipo de candidato que está buscando"/>
                </CaixaPesquisa>

                <ContainerCartoes>
                
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>E</Avatar>
                            <div>
                                <h3>Emanuel Avgerino</h3>
                                <small>Estágio TI</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Sou estudante de Engenharia de Software, atualmente no 4º período, com bastante interesse em desenvolvimento web. Tenho experiência com HTML, CSS e JavaScript, e venho me aprofundando em React.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <BotoesCartao>
                            <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                            <BotaoAprovar>Aprovar</BotaoAprovar>
                        </BotoesCartao>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>F</Avatar>
                            <div>
                                <h3>Fabio Figueiredo</h3>
                                <small>Estágio TI</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Curso Análise de Sistemas e busco sempre aprender. Tenho conhecimento em Python, MySQL e Git, e já participei de hackathons e minicursos.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>G</Avatar>
                            <div>
                                <h3>Giovana Rocha</h3>
                                <small>Estágio TI</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Estudo Ciência da Computação e amo UX/UI. Trabalhei com Figma, HTML, CSS e JavaScript em projetos acadêmicos, e sou ótima comunicadora.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>W</Avatar>
                            <div>
                                <h3>Wictória Salgado</h3>
                                <small>Estágio TI</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Cursando Sistemas de Informação, foco no back end. Tenho conhecimento em Java, Python e lógica de programação.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>V</Avatar>
                            <div>
                                <h3>Vinícius Dantas</h3>
                                <small>Estágio Redes</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Estudo Redes de Computadores. Tenho prática com infraestrutura, roteadores e protocolos. Proativo e organizado.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>C</Avatar>
                            <div>
                                <h3>Camila Martins</h3>
                                <small>Estágio QA</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Sou detalhista e amo testar software. Estudo Engenharia da Computação e conheço ferramentas como Selenium e JUnit.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>R</Avatar>
                            <div>
                                <h3>Rodrigo Lima</h3>
                                <small>Estágio Suporte</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Tenho experiência em suporte técnico, formatação de PCs, redes e atendimento ao cliente. Estudante de ADS.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>J</Avatar>
                            <div>
                                <h3>Juliana Nogueira</h3>
                                <small>Estágio Design</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Estudante de Design Digital. Trabalho com Adobe XD, Illustrator e Figma. Gosto de criar interfaces intuitivas e acessíveis.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>D</Avatar>
                            <div>
                                <h3>Diego Ramos</h3>
                                <small>Estágio Dados</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Foco em análise de dados. Conhecimento em Python, Pandas, SQL e Power BI. Participei de projeto de análise de churn para e-commerce.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                        <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                        <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                    
                    <Cartao>
                        <CabecalhoCartao>
                            <Avatar>B</Avatar>
                            <div>
                                <h3>Beatriz Costa</h3>
                                <small>Estágio Full Stack</small>
                            </div>
                        </CabecalhoCartao>
                        <p>Conhecimento em Node.js, React e bancos de dados SQL/NoSQL. Participa de bootcamp e projetos open source.</p>
                        <a href="#" class="botao-link">Ver Perfil</a>
                        <div class="botoes-cartao">
                            <BotaoRejeitar>Rejeitar</BotaoRejeitar>
                            <BotaoAprovar>Aprovar</BotaoAprovar>
                        </div>
                    </Cartao>
                </ContainerCartoes>
                
            </ConteudoPrincipal>
        </Body>
    )
}

export default FeedEmpresa;