import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body {
    margin:0;
    font-family: 'Gotham Pro';
}

button {
    font-family: 'Gotham Pro';
}
`

export const BaseSite = styled.div`
display: flex;
flex-direction: column;
background-color: #FE7E01;
height: 100vh;
justify-content: space-between;
overflow-x: hidden;
`

export const Header = styled.header`
height: 150px;
display: flex;
font-size: 35px;
align-items: center;
background-color: #FAB24E;

img {
    width: 80px;
    height: 80px;
}
`

export const BotaoMultiPaginas = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
margin-top: 50px;
margin-bottom: 100px;

button {
    border: none;
    background-color: #FAB24E;
    font-size: 30px;
   
}

`

export const Footer = styled.footer`
display: flex;
justify-content: flex-end;
padding: 25px;
background-color: #FAB24E;

img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
`
