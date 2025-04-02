import styled from "styled-components"

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #BFD7EA;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`

const Info = styled.div`
  text-align: center;
  width: 50%;
  padding: 20px;
`

const Img = styled.img`
  max-width: 300px;
  width: 100%;
`

const P = styled.p`
  font-size: 22px;
  color: #333;
  margin-top: 15px;
  font-weight: normal;
`


const TituloForm = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
`

const FormContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`

const EmpresaForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
`

const Input = styled.input`
  width: 90%;
  padding: 8px;
  background-color: #F5F5F5;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
`

const Button = styled.button`
  width: 40%;
  margin-top: 20px;
  padding: 12px;
  background-color: #f8f5f5;
  color: rgb(245, 23, 23);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  &:hover{
    background-color: #D43F3F;
  }
`


function Cadastro(){


  return(
    <>
      <Body>
          <Content>
              <Info>
                  <Img src="https://github.com/pfFabio/images/blob/main/IMG-20250402-WA0065__1_-removebg-preview.png?raw=true" alt="Imagem professor"/>
                  <P>“Encontramos o melhor candidato para <b>melhor vaga, para melhor empresa!”</b></P>
              </Info>
              <FormContainer>
                <TituloForm>Cadastre-se</TituloForm>
                <EmpresaForm>
                  <Input type="text" id="nome" name="nome" placeholder="Nome da Empresa" required/>
                  <Input type="email" id="email" name="email" placeholder="E-mail" required/>
                  <Input type="tel" id="telefone" name="telefone" placeholder="Telefone" required/>
                  <Input type="text" id="endereco" name="endereco" placeholder="Endereço" required/>
                  <Input type="password" id="senha" name="senha" placeholder="Senha" required/>
                  <Input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua Senha" required/>
                  <Button type="submit"><b>Enviar</b></Button>
                </EmpresaForm>
              </FormContainer>
        </Content>

      </Body>

    </>
  );
};

export default Cadastro;