import styled from 'styled-components'



const Body = styled.body`
  background-color: #c1b8f0;
`

const Container= styled.div`
  display: flex;
`



const Conteudo = styled.main`
  flex-grow: 1;
  padding: 40px;
  background-color: #b7d4f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Titulo = styled.h1`
  padding-right: 320px;
  margin-bottom: 30px;
  color: #001c42;
`

const Etapa = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0const 1);
    margin-bottom: 20px;
    width: 100%;   
    max-width: 800px;
    p{
        margin-bottom: 8px;
    }
    small{
      display: block;
      margin-bottom: 10px;
      color: gray;
    }
`


const CabecalhoEtapa = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #1d3557;
`




const BarraProgresso = styled.div`
  background-color: #eee;
  border-radius: 10 px;
  height: 10px;
  overflow: hidden;
`

const Progresso = styled.div`
  background-color: #0f014e;
  height: 100%;
  border-radius: 10px;
`

const Destaque = styled.span` 
  color: #e76f51;
  font-weight: bold;
`













function AcompanharVagas() {
  return (
    <Body>
        <Container>
            <Conteudo>
                <Titulo>Acompanhamento de Inscrição</Titulo>

                <Etapa>
                    <CabecalhoEtapa>
                        <strong>Currículo</strong>
                        <span>Etapa 1/4</span>
                    </CabecalhoEtapa>
                    <p>Verificar dados do perfil</p>
                    <small>Termina em: <strong>31/06/2025</strong></small>
                    <BarraProgresso>
                    <Progresso style={{width: "15%"}}></Progresso>
                    </BarraProgresso>
                </Etapa>

                <Etapa>
                    <CabecalhoEtapa>
                        <strong>Análise</strong>
                        <span>Etapa 2/4</span>
                    </CabecalhoEtapa>
                    <p>Estamos fazendo uma análise do seu perfil! Aguardeconst </p>
                    <small>Termina em: <strong>10/07/2025</strong></small>
                    <BarraProgresso>
                    <Progresso style={{width: "30%"}}></Progresso>
                    </BarraProgresso>
                </Etapa>

                <Etapa>
                    <CabecalhoEtapa>
                        <strong>Entrevista com o RH</strong>
                        <span>Etapa 3/4</span>
                    </CabecalhoEtapa>
                    <p>A nossa equipe entrará em contato com você nos próximos diasconst </p>
                    <small>Termina em: <strong>17/07/2025</strong></small>
                    <BarraProgresso>
                    <Progresso style={{width: "60%"}}></Progresso>
                    </BarraProgresso>
                </Etapa>

                <Etapa>
                    <CabecalhoEtapa>
                        <strong>Final 🏁</strong>
                        <span>Etapa 4/4</span>
                    </CabecalhoEtapa>
                    <p><Destaque>Parabéns, processo concluído!</Destaque></p>
                    <small>Termina em: <strong>27/07/2025</strong></small>
                    <BarraProgresso>
                    <Progresso style={{width: "100%"}}></Progresso>
                    </BarraProgresso>
                </Etapa>
            </Conteudo>
        </Container>
    </Body>
    );
}   

export default AcompanharVagas;