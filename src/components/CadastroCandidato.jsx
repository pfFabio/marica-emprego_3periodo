import styled from "styled-components"

const Body = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  background-color: #A8D0E6;
  height: 100%;
  `
  const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  `
  
  
  const Content = styled.main`
  display: flex;
  align-items: center;
`

const Info = styled.section`
  width: 100%;
  max-width: 20rem;
  text-align: center;
  margin-left: 6rem;
`

const Illustration = styled.img`
    width: 100%;
    border-radius: 50%;
`

const Quote = styled.p`
  font-size: 2rem;
  color: #24305E;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  padding: 2rem;
`

const Input = styled.input`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #E9E9E9;
  border-radius: 2rem;
  font-size: 1rem;
`

const Button = styled.button`

  background-color: #F6F6F6;
  color: #F76C6C;
  border: none;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  width: 10rem;
  align-self: center;
`

const P = styled.p`
  font-size: 2rem;
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
              <Illustration src="/cadastrocandidato.png" alt="Enfermeira"/>
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