import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import Icon from '@mdi/react'

export const ContainerHeader = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid darkgray;
    height: 70px;
    padding: 5px 15px;
`;

export const LogoHeader = styled.img`
width: 45%;
height: 100%;
`;

export const MatchIconPurple = styled(Icon)`
display: block;
color: #762d93;
`

export const MatchIconGreen = styled(Icon)`
display: block;
color: #48a498;
`

export const EvenSpace = styled.div`
width: 27px;
`


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#762d93',

        },
        secondary: {
            main: '#48a498',
        },
    },
});