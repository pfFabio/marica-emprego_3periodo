import styled from "styled-components"

const Body = styled.body`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
`
const Container = styled.div`
  display: flex;
  width: 100%;
`


const Content = styled.main`
  display: flex;
  flex-grow: 1;
  background: #A8D0E6;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.section`
  max-width: 40%;
  text-align: center;
  margin: 120px;
`

const Illustration = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
`

const Quote = styled.p`
  font-size: 30px;
  color: #24305E;
`



const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: auto;
  margin: 120px;
`

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #E9E9E9;
  border-radius: 20px;
  font-size: 16px;
`

const Button = styled.button`

  background: #F6F6F6;
  color: #F76C6C;
  border: none;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  width: 100px;
  align-self: center;
`

const P = styled.p`
  font-size: 30px;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #24305E;
`

function CadastroEmpresa(){
  return(
    <Body>
      <Container>
        <Content>
          <Info>
              <Illustration src="https://github.com/pfFabio/images/blob/main/Imagem_do_WhatsApp_de_2025-04-02_%C3%A0_s__11.17.51_2e1b4da6-removebg-preview.png?raw=true" alt="Enfermeira"/>
              <Quote>
                  "Esta é a sua oportunidade de dar o <b>próximo passo</b> na sua carreira!"
              </Quote>
          </Info>
          <Form>
              <P>Cadastre-se</P>
              <Input type="text" placeholder="Nome do candidato"/>
              <Input type="email" placeholder="E-mail"/>
              <Input type="tel" placeholder="Telefone"/>
              <Input type="text" placeholder="Endereço"/>
              <Input type="password" placeholder="Senha"/>
              <Input type="password" placeholder="Confirme sua senha"/>
              <Button type="submit">Enviar</Button>
          </Form>
        </Content>
      </Container>
    </Body>
    )
}

export default CadastroEmpresa;