import styled from "styled-components";

const Pe = styled.footer`
    display:flex;
    background-color: #7dc9e2;
    color: rgb(49, 49, 49);
    align-items: center;
    justify-content: center;
    height: 50px ;
    width: 100%;
    font-family: "Montserrat";
`

function Footer() {
    return (
    <Pe>
        &copy; 2024 Maricá Mais Emprego. Todos os direitos reservados.
    </Pe>
    )
};

export default Footer;