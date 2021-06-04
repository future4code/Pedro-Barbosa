import styled, { keyframes } from 'styled-components';
import Icon from '@mdi/react';

export const ContainerHeader = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid darkgray;
    height: 70px;
    padding: 5px 15px;
`;

const SweepAnimation = keyframes`
0% {
    transform: rotate(20deg) ;
}

25% {
    transform: rotate(50deg);
}

50% {
    transform: rotate(20deg);
}

75% {
    transform: rotate(50deg);
}

100% {
    transform: rotate(20deg);
}
`;

export const LogoHeader = styled.img`
width: 45%;
height: 100%;
`;

export const MatchIconPurple = styled(Icon)`
display: block;
color: #762d93;
cursor: pointer;
  transition: 0.2s;

:hover {
    transform: scale(0.9);
}
`;

export const MatchIconGreen = styled(Icon)`
display: block;
color: #48a498;
cursor: pointer;
  transition: 0.2s;

:hover {
    transform: scale(0.9);
}
`;
export const BroomIcon = styled.div`
border: none;
background-color: white;
cursor: pointer;

:hover {
animation: ${SweepAnimation} 2s infinite ; 
}
`;

export const EvenSpace = styled.div`
width: 27px;
`;
