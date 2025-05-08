import styled from "styled-components";



const Container = styled.div` 
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`


const FormContainer = styled.main`
    width: 100%;
    background-color: #b3d9f0;
    padding: 40px;
    margin-left: 4rem;
`

const Header = styled.div`
  display: flex;
  margin-left: 5rem;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: #002147;
    font-size: 24px;
    font-family: "Montserrat";
    font-weight: 800;
    
  }
`

const JobForm = styled.form`
    margin-top: 30px;
    margin-left: 6rem;
    margin-right: 10rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  
    label {
        font-weight: bold;
        color: #002147;
        font-family: "Montserrat";
        font-weight: 800;
    }
    
    input,
    select,
    textarea {
        padding: 10px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-family: "Montserrat";
        font-weight: 800;
        color: #505050;
    }
`  


const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`

const BtnSalvar  = styled.button`
  background-color: #1c2c5b;
  color: white;
  font-weight: bold;
  padding: 10px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`

const BtnCancelar = styled.button`
  background-color: white;
  color: #1c2c5b;
  font-weight: bold;
  padding: 10px 30px;
  border: 2px solid #1c2c5b;
  border-radius: 25px;
  cursor: pointer;
`



function CadastrarVaga(){
    return(
        <Container>
            <FormContainer>
                <Header>
                    <h1>Cadastrar Nova Vaga</h1>
                </Header>

                <JobForm>
                    <label htmlFor="titulo">Título da Vaga</label>
                    <input type="text" id="titulo"/>

                    <label htmlFor="area">Área de Atuação</label>
                    <select id="area">
                        <option>Selecione</option>
                    </select>

                    <label htmlFor="contrato">Tipo de Contrato</label>
                    <select id="contrato">
                        <option>Selecione</option>
                    </select>

                    <label htmlFor="salario">Faixa Salarial</label>
                    <input type="text" id="salario"/>

                    <label htmlFor="descricao">Descrição da Vaga</label>
                    <textarea id="descricao" rows="4"></textarea>

                    <label htmlFor="requisitos">Requisitos</label>
                    <input type="text" id="requisitos"/>

                    <label htmlFor="beneficios">Benefícios</label>
                    <input type="text" id="beneficios"/>

                    <Buttons>
                        <BtnSalvar type="submit" >Salvar Vaga</BtnSalvar>
                        <BtnCancelar type="button">Cancelar</BtnCancelar>
                    </Buttons>
                </JobForm>
            </FormContainer>
        </Container>
  

    )
}

export default CadastrarVaga