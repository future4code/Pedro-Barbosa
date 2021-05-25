import styled from "styled-components"



export const ContainerListaPlaylists = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 2;

h1 {
    margin-bottom: 50px;
}
`

export const ListaPlaylistCard = styled.div`
background-color: #FAB24E;
display: flex;
width: 50%;
justify-content: space-between;
align-items: center;
border: 1px solid black;
padding: 12px;
margin-bottom: 20px;

button {
    margin-left: 10px;
    border: none;
    height: 40px;
    background-color: #FE7E01;
}
`