import styled from "styled-components"

export const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h2 {
    margin-top: 40px;
}
`

export const CardMusica = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
align-items: center;
width: 30%;
margin-bottom: 20px;
background-color: #FAB24E;
`
export const CardAdicionar = styled.div`
display: flex;
flex-direction: column;
text-align: center;

input {
    background-color: #FAB24E;
    border: none;
    margin-bottom: 10px;
}

button {
    border: none;
    background-color: #FAB24E;
}
`

