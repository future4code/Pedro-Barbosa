import styled from 'styled-components'

export const ContainerPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button {
    width: 10%;
    margin: 50px 0;
}

`

export const ContainerTarefas = styled.div`
display: grid;
grid-template-columns: 30% 70%;
grid-template-rows: repeat(4, 1fr);
width: 30%;
margin: auto;
text-align: start;
border: solid 1px black;
padding-left: 5px;
`