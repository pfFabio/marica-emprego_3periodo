import styled from "styled-components";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

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
    const [credenciais, setCredenciais] = useState({login: '', senha: ''});
    const navegar = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredenciais({
            ...credenciais,
            [name]: value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {login} = credenciais;
        const destino = login === 'candidato' ? '/feed' : '/feedempresa';
        navegar(destino)
    }
    return(
        <Body>
            <Container>
                <Form onSubmit={handleSubmit}>

                    <Label htmlFor="login"> ID ou E-Mail</Label>
                    <Input type="text" name="login" value={credenciais.login} onChange={handleInputChange} />

                    <Label htmlFor="senha"> SENHA</Label>
                    <Input type="password" name="senha" value={credenciais.senha} onChange={handleInputChange}/>

                    <Lembrar>
                        <input type="checkbox" name="lembrar"/>
                        Lembre-se de mim
                    </Lembrar>
                        <a href="/">Esqueci minha senha </a>
                    <Enviar type="submit">enviar</Enviar>
                </Form>
            </Container>
        </Body>
    )
}

export default Login;