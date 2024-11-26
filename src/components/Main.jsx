import styled from 'styled-components';

const Div = styled.div`
  background-color:  ${({ theme }) => theme.buttonBackground};
  color:  ${({ theme }) => theme.buttonText};
  margin-top: 80px;
`

const Texto = styled.div`
  display: flex;
  justify-content: center;
  color:  black;
  background-color: #ddd;
  background-image: url("https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/Montagem_Ilustracao_Prefeitura-de-Marica-1.png?raw=true0");
  background-size: 100%;
  padding-top:3rem ;
  padding-bottom: 3rem;
  width: 100%;
  text-align: left;
`

const TextoUm = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'Montserrat';
  font-size: 1.5rem;
  @media (max-width: 768px){
    font-size: 1rem;
  }
`

const TextoDois = styled.div`
  font-family: 'Montserrat';
  font-size: 1.5rem;
    @media (max-width: 768px){
    font-size: 1rem;
  }
`

const Empresas = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  font-size:2.5rem;
  font-weight: bolder;
  padding-top: 1em;
  color:  ${({ theme }) => theme.primary}
`;

const ImgsEmpresas = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: space-around;
  gap: 3px;
  padding-top: 5rem;
  padding-bottom: 6rem;
`;

const Img = styled.img`
  width: 100%;
`




function Main() {
  return (
    <Div>
      <section>
            <img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/fundo.png?raw=true" alt="imagemPrincipal" width="100%" />

        <Texto>
          <TextoUm id='textoUm' >
              O projeto "Maricá+Emprego" reúne o útil ao agradável na hora de você, candidato ou 
            empresa, procurar e/ou oferecer uma vaga de emprego, gerando cada vez mais mão-de-obra 
            para a cidade, simplificando para todos, juntamente ao SINE e a    Prefeitura de Maricá. 
          </TextoUm>
          <TextoDois>
            Nós visamos facilitar a procura e entrega de vagas por meio da criação de um
            perfil que guarda as informações do usuário/empresa cadastrados, comparando os perfis
            dos candidatos com as vagas ofertadas e dando um "match" entre os participantes.
          </TextoDois>
        </Texto>
        
      </section>

      <section className="conteudo">
        <Empresas id='empresas'>Empresas Parceiras</Empresas>
              
        <ImgsEmpresas>
                <Img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/marica.png?raw=true" alt="logomarica" width="300px" />
                <Img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/sinelogo.png?raw=true" alt="logosine" width="300px" />
                <Img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/univassouras2.png?raw=true" alt="logounivassouras" width="400px" />
        </ImgsEmpresas>
      </section>
    </Div>
  );
};

export default Main;
