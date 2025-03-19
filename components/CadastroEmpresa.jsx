import styled from "styled-components"


const Formulario = styled.div`
  display:flex;
  justify-content: center;
  background-color:  ${({ theme }) => theme.formBG};
  padding-top: 2rem;
  padding-bottom: 3rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  color:  black;
  font-family: "Epilogue";
  @media(max-width: 768px){
    width:100%
  }
`

const Input = styled.input`
  margin-top: 0;
  height: 30px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  @media(max-width: 768px){
    width:90%
  }
`

const UploadButton = styled.label`
  display: inline-block;
  background-color: ${({ theme }) => theme.uploadButtonBackground || "#f0f0f0"};
  color: ${({ theme }) => theme.uploadButtonText || "#333"};
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 15px;
  border: 1px solid lightgray;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.uploadButtonHover || "#d9d9d9"};
  }

  input {
    display: none;
  }
`;


const Submit = styled.input`
  display: flex;
  justify-content: center;
  background-color:  ${({ theme }) => theme.buttonBackground};
  color:  ${({ theme }) => theme.buttonText};
  font-weight: bold;
  border-radius: 15px;
  margin-top: 20px;
  height: 35px;
  width: 70px;
  border: 0;
  &:hover{
    cursor: pointer;
  }
`


function Cadastro(){


  return(
    <>
      <h2 id="cadastreSe">Cadastre-se</h2>  
      <Formulario>
        <Form autoComplete="off">
            <label htmlFor="Nome" >Nome da empresa</label>
            <Input type="text" id="empresa" name="empresa" required />
            <label htmlFor="email" >E-mail</label>
            <Input type="email" id="email" name="email" required />
            <label htmlFor="telefone" >Telefone</label>
            <Input type="tel" id="telefone" name="telefone" required />
            <label htmlFor="local" >Endereço</label>
            <Input type="text" id="endereco" name="endereco" required />
            <label htmlFor="senha" >Senha</label>
            <Input type="password" id="senha" name="senha" required />
            <label htmlFor="senha" >Confirme sua senha</label>
            <Input type="password" id="confSenha" name="confSenha" required />
            <Submit type="submit" id="enviar" value="Enviar" />
        </Form>
      </Formulario>
    </>
  );
};

export default Cadastro