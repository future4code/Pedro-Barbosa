import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
display: flex;
background-color: white;
flex-direction: column;
border: 1px solid darkgray;
height: 60vh;
width: 400px;
border-radius: 5px;
`;