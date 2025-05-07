import styled from "styled-components";

const Body = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
background-color: #A8D0E6;
`

const Container = styled.div`
display: flex;
width: 40rem;
height: 30rem;
border-radius: 2rem;
background-color: white;
`


const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
font-size: 1rem;
`


const Label=styled.label`
width: 30rem;
text-align: start;
font-size: 2rem;
font-weight: bold;
margin-bottom: 1rem;
margin-top: 1rem;
`

const Input = styled.input`
width: 30rem;
height: 2rem;
background-color: #F6F6F6;
border-radius: 2rem;
border:1px solid  #D6D6D6;
`

const Lembrar = styled.div`
display: flex;
width: 28rem;
margin: 1rem;
justify-content: start;
`

const Enviar = styled.button`
margin-top: 2rem;
`


function Login(){
    return(
        <Body>
            <Container>
                <Form action="">
                    <Label for="login"> ID ou E-Mail</Label>
                    <Input type="text" name="login" />
                    <Label for="senha"> SENHA</Label>
                    <Input type="password" name="senha" />
                    <Lembrar>
                        <input type="checkbox" name="lembrar"/>
                        Lembre-se de mim
                    </Lembrar>
                        <a href="/">Esqueci minha senha </a>
                    <Enviar type="submit"><a href="/feed">enviar</a></Enviar>
                </Form>
            </Container>
        </Body>
    )
}

export default Login;