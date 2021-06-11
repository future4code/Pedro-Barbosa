import styled from "styled-components";

export const TripDetailCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 500px;
padding: 20px;
margin: 30px;
background-color: rgba(89, 171, 208, 0.8);
`

export const TripDetailContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
word-wrap:break-word;
`

export const ApprovedCandidatesList = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 300px;
height: 500px;
border: solid 1px black;
top: 250px;
right: 60px;
padding: 20px;
align-items: center;
background-color: rgba(89, 171, 208, 0.8);

h2 {
    text-align: center;
}
`



export const PendingCandidatesContainer = styled.div`
display: flex;
flex-direction: column;
width: 35vw;
margin: 20px auto;
word-wrap: break-word;
background-color: rgba(89, 171, 208, 0.8);
border: solid 1px black;

h2 {
    text-align: center
}
`

export const NoPendingContainer = styled.div`
display: flex;
justify-content: center;
`