import styled, { createGlobalStyle } from 'styled-components';
import launch from "./assets/launching.jpg"
import { createMuiTheme } from '@material-ui/core/styles';

export const GlobalStyle = createGlobalStyle`
  body {
   margin: 0;
   font-size: large;
   /* font-family: 'Montserrat' ; */
   font-family: "Myriad Pro";
   background-color: #103E62;
   background:url(${launch}) no-repeat;
   background-size: cover;
  }
`;

export const MainContainer = styled.div`
display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#103E62'
    },
    secondary: {
      main: '#59ABD0'
    }
  },
});