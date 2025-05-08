import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #94E4FE;
    width: 100%
`

const Content = styled.main`
    border-radius: 2rem;
    background-color: rgb(255, 255, 255);
    margin-left: 8rem;
    margin-top: 5rem;
    height: 42rem;
    width: 50rem;
    `
    
const Header = styled.section`
    border-radius: 2rem;
    position: relative;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background: linear-gradient(to top,rgb(255, 255, 255) 50%, #24E8DE 50%);
    overflow: hidden;
`

const ProfilePic = styled.div`
    width: 3rem;
    background-color: #c9eff8;
    border-radius: 50%;
`

const Company = styled.div`
    padding-top: 2rem;
`

const Telefone = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1rem;
`

const TelefonerInput = styled.input`
    margin-left: 1rem;
    border: 1px solid #000;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
`

const InfoGrid = styled.section`
    display: grid;
    grid: 10rem/ auto auto;
    gap: 1rem;
    margin-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 7rem;
`

const InfoBox = styled.div`
    background-color: #b2f5f5;
    padding: 0.5rem;
    border-radius: 2rem;
    width: 20rem;
    height: 7rem;
    `
const InfoBoxfull = styled.div`
    background-color: #b2f5f5;
    padding: 0.5rem;
    border-radius: 2rem;
    width: 20rem;
    height: 5rem;
`

const Edit = styled.span`
    cursor: pointer;
    margin-left: 0.5rem;
`

const PostIcon = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

const Icon = styled.span`
    font-size: 1rem;
    cursor: pointer;
`

const CampoEditavel = styled.input`
    width: 50%;
    height: 10%;
    padding: 1rem 1.5rem;
    border: 1px solid #aaa;
    border-radius: 1rem;
    font-size: 1rem;
    background-color: #f0fefe;
    transition: border-color 0.3s;
`

const AddIcon = styled.span`
    position: absolute;
    bottom: 3rem;
    left: 5rem;
    background-color: #22e0db;
    color: #fff;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    text-align: center;
    line-height: 1rem;
    font-weight: bold;
    cursor: pointer;
`


function PerfilEmpresa(){
    return(
        <>
            <Container>
                <Content>
                <Header>
                    <ProfilePic>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5.121 17.804A10.967 10.967 0 0112 15c2.485 0 4.77.81 6.879 2.175M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <AddIcon>+</AddIcon>
                    </ProfilePic>
                    <Company>
                        <h2>Nome da empresa <Edit>✏️</Edit></h2>
                        <p>campo editável</p>
                    </Company>
                    <Telefone>
                        <TelefonerInput placeholder="Telefone" type="text"/>
                    </Telefone>
                </Header>

                <InfoGrid>
                    <InfoBox> 
                    <h3>Sobre</h3>
                    <CampoEditavel type="text" placeholder="campo editável"/>
                    </InfoBox>
                    <InfoBox>
                    <h3>Vagas recentes</h3>
                    <CampoEditavel type="text" placeholder="campo editável"/>
                    </InfoBox>
                    <InfoBox>
                    <h3>Endereço</h3>
                    <CampoEditavel type="text" placeholder="campo editável"/>
                    </InfoBox>
                    <InfoBox>
                    <h3>Funcionários ativos</h3>
                    <CampoEditavel type="number" placeholder="campo editável"/>
                    </InfoBox>
                    <InfoBoxfull>
                        <h3>Publicações da página:</h3>
                        <PostIcon>
                            <a href="/cadastrarvaga"><Icon>➕</Icon></a>
                            <Icon>🖼️</Icon>
                        </PostIcon>
                    </InfoBoxfull>
                </InfoGrid>
                </Content>
            </Container>
        </>
    )
}


export default PerfilEmpresa;