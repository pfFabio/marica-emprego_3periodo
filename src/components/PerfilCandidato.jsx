import styled from "styled-components";
import {HiPencil} from "react-icons/hi2";

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100rem;
    width: 100vw;
    background-color: #94E4FE;
    font-family: 'Montserrat', sans-serif;
`

const Content = styled.div`
    display: flex;
    height: 55rem;
    background-color: #A8D0E6;
    flex-grow: 1;
    background-color: rgb(255, 255, 255);
    border-radius: 2rem;
    margin: 2% 3%;
    margin-left: 5rem;
    display: flex;
    flex-direction: column;

    @media(max-width:800px){
        height: 90rem;
    }
  `

  const Header= styled.div`
    position: relative;
    padding: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: transparent;
    overflow: hidden;
    padding-top: 3rem;
    &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #E9E9E9;
    z-index: 0;
    border-radius: 2rem 2rem 0 0;
}
`
  
/*
  .header > * {
    position: relative;
    z-index: 1;
  }
  
  .profile-pic {
    width: 120px;
    height: auto;
    background-color: #c9eff8;
    border-radius: 50%;
  }
*/
const Company=styled.div`
    padding-top: 5rem;
    font-family: "Montserrat", sans-serif;
`

 
  
  const InfoGrid = styled.section`
    display: grid;
    grid: 10rem/ auto auto;
    gap: 2rem;
    margin-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 30rem;
    
    @media(max-width:800px){
        grid: 10rem / auto;
    }
`
  
  const InfoBox=styled.div`
    background-color: #F3F3F3;
    padding: 1rem;
    border-radius: 2rem;
    min-width: 25rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.1rem;
`

  
  const ProfilePic = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  
 const Svg = styled.svg`
    width: 60%;
    height: 60%;
  `
  
  const AddIcon = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: #E9E9E9;
    color: #fff;
    font-size: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    line-height: 2.5rem;
    font-weight: bold;
    cursor: pointer;
`


function PerfilCandidato(){
    return(
        <Container>
            <Content>
                <Header>
                    <ProfilePic>
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5.121 17.804A10.967 10.967 0 0112 15c2.485 0 4.77.81 6.879 2.175M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </Svg>
                        <AddIcon>+</AddIcon>
                    </ProfilePic>
                    <Company>
                        <h2>Nome do Candidato <span class="edit"><HiPencil/></span></h2>
                        <p>campo editável</p>
                    </Company>
                    
                </Header>

                <InfoGrid>
                    <InfoBox> 
                        <h3>Biografia</h3>
                        <p>campo editável <span class="edit"><HiPencil/></span></p>
                    </InfoBox>
                    <InfoBox>
                        <h3>Experiência</h3>
                        <p>campo editável <span class="edit"><HiPencil/></span></p>
                    </InfoBox>
                    <InfoBox>
                        <h3>Endereço</h3>
                        <p>campo editável <span class="edit"><HiPencil/></span></p>
                    </InfoBox>
                    <InfoBox>
                        <h3>Formação</h3>
                        <p>campo editável <span class="edit"><HiPencil/></span></p>
                    </InfoBox>
                    <InfoBox>
                        <h3>Contatos</h3>
                        <p>campo editável <span class="edit"><HiPencil/></span></p>
                    </InfoBox>
                    
                    <InfoBox>
                        <h3>Cursos e Habilidades</h3>
                        <p>campo editável <span class="edit"><HiPencil/></span></p>
                    </InfoBox>
                </InfoGrid>
            </Content>
        </Container>
    )
};



export default PerfilCandidato;