import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 400rem;
    width: 100vw;
    background-color: #94E4FE;
`

const Content = styled.main`
    border-radius: 2rem;
    background-color: rgb(255, 255, 255);
    margin-left: 6rem;
    margin-right: 4rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    height: 50rem;
    width: 80rem;
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
    padding-top: 3rem;
`

const ProfilePic = styled.div`
    width: 120px;
    height: auto;
    background-color: #c9eff8;
    border-radius: 50%;
`

const Company = styled.div`
    flex-grow: 1;
    padding-top: 5rem;
`

const Telefone = styled.div`
    display: flex;
    align-items: center;
    padding-top: 50px;
`

const TelefonerInput = styled.input`
    margin-left: 10px;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 5px 10px;
`

const InfoGrid = styled.section`
    display: grid;
    grid: 10rem/ auto auto;
    gap: 1rem;
    margin-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 30rem;
`

const InfoBox = styled.div`
    background-color: #b2f5f5;
    padding: 1rem;
    border-radius: 2rem;
    width: 34rem;
    `
const InfoBoxfull = styled.div`
    background-color: #b2f5f5;
    padding: 15px;
    border-radius: 20px;
    width: 34rem;
    height: 7rem;
`

const Edit = styled.span`
    cursor: pointer;
    margin-left: 5px;
`

const PostIcon = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

const Icon = styled.span`
    font-size: 3rem;
    cursor: pointer;
`

const CampoEditavel = styled.input`
    width: 90%;
    padding: 10px 15px;
    border: 1px solid #aaa;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 8px;
    background-color: #f0fefe;
    transition: border-color 0.3s;
`

const AddIcon = styled.span`
    position: absolute;
    bottom: 4rem;
    left: 8rem;
    background-color: #22e0db;
    color: #fff;
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
    line-height: 2rem;
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
                            <Icon>➕</Icon>
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