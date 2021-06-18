import styled from "styled-components";

export const TripContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr ;

h1 {
    grid-area: 2 / 3 / 1 / 2;
}
`;

export const TripCard = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
justify-content: center;
width: 25vw;
height: 35vh;
margin: 30px;
border: solid 1px black;
border-radius: 15px 50px 30px;
background-color: rgba(89, 171, 208, 0.8);
box-shadow: 0 4px 8px rgba(0,0,0,0.8);
font-size: 17px;
word-wrap: break-word;
overflow-x: hidden;
`;


