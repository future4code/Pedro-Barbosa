import styled from "styled-components";

export const TripInfoCard = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 200px;
padding: 10px;
margin: 30px;
border: 1px solid black;
justify-content: space-evenly;
align-items: center;
background-color: rgba(89, 171, 208, 0.8);
word-wrap: break-word;
`;

export const TripInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const ButtonSpace = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
align-items: center;
`;

export const TripListContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr ;
text-align: center;

h1 {
    grid-area: 2 / 4 / 1 / 2;
}
`;
