import styled from "styled-components"

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #BFD7EA;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`

const Info = styled.div`
  text-align: center;
  width: 40%;
  margin: 2rem;
`

const Img = styled.img`
  width: 80%;
`

const P = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
`


const TituloForm = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
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
  margin-left: 10rem;
`

const Input = styled.input`
  width: 90%;
  padding: 0.8rem;
  background-color: #F5F5F5;
  margin: 1rem 0;
  border: 0.1rem solid #ddd;
  border-radius: 2rem;
  font-size: 1rem;
`

const Button = styled.button`
  width: 40%;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f5f5;
  color: rgb(245, 23, 23);
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
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
                  <Img src="/cadastroempresa.png" alt="Imagem professor"/>
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