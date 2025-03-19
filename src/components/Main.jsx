import styled from 'styled-components';





const Div = styled.div`
  background-color:  ${({ theme }) => theme.background};
  color:  ${({ theme }) => theme.buttonText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6rem;
  width: 100rem;

`

const Container = styled.div`
  display: flex;
  justify-content: center;

`

const Texto = styled.div`
  display: flex;
  justify-content: center;
  color:   ${({ theme }) => theme.primary};
  background-color:  ${({ theme }) => theme.background};
  background-image: url("https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/Montagem_Ilustracao_Prefeitura-de-Marica-1.png?raw=true0");
  background-size: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: left;
`

const TextoUm = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'Montserrat';
  font-size: 1.5rem;
  `
  
  const TextoDois = styled.div`
  font-family: 'Montserrat';
  font-size: 1.5rem;
`
const ContainerContato = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #E9E9E9;
  height: 5rem;

  padding-left: 4rem;
  `
  
const A = styled.a`
  display:flex
  align-items: center;
  text-decoration:none;
  text-align: center;
  border-radius:2rem;
  background-color: #374785;
  color: white;
  height: 3rem;
  width: 20rem;
`


const Empresas = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  font-size:2.5rem;
  font-weight: bold;
  padding-top: 1rem;
  color:  ${({ theme }) => theme.background}
  width: 58rem;
`;

const ImgsEmpresas = styled.div`
  display: flex;
  gap: 4rem;
  padding-left: 9rem;
  padding-top: 5rem;
  padding-bottom: 6rem;
`;

const Img = styled.img`

`


function Main() {
  return (
    <Div>
      <section>
          <Container>
            <img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/fundo.png?raw=true" alt="imagemPrincipal" width='100%'/>
          </Container>

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

      <ContainerContato>
        <A href="https://docs.google.com/forms/d/e/1FAIpQLSdpZQJJCQuG7_e7ay0p9Nw4CBehbreMHiRFkfHF9xSWAfnapw/viewform?usp=header">
          Se interessou pelo projeto? <b>clique <br/>aqui!</b> para entrar em contato 
        </A>
      </ContainerContato>


      <section className="conteudo">
        <Empresas id='empresas'>Empresas Parceiras</Empresas>
              
        <ImgsEmpresas>
        
          <Img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/sinelogo.png?raw=true" alt="logosine" width="300rem" />
          <Img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/univassouras2.png?raw=true" alt="logounivassouras" width="600rem" />
          <Img src="https://github.com/EmanuelAvgerino/marica-mais-emprego-/blob/main/img/marica.png?raw=true" alt="logomarica" width="300rem" />
        </ImgsEmpresas>
      </section>
    </Div>
  );
};

export default Main;
