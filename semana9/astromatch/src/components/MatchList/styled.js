import styled from 'styled-components'

export const MatchListContainer = styled.div`
overflow-x: hidden;
`;

export const MatchCard = styled.div`
display: flex;
padding: 10px;
cursor: pointer;
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

p {
    padding-left: 10px;
}

:hover{
    background-color: rgba(72, 164, 152, 0.5);
}
`;

export const WarningNoMatches = styled.div`
display: flex;
flex-direction: column;
height: 450px;
width: 50%;
margin:auto;
color: #762d93;
justify-content: center;
padding: 20px;
`;