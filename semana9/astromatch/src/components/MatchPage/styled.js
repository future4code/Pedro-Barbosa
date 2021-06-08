import styled from 'styled-components'

export const ContainerMatchPage = styled.div`
display: flex;
flex-direction: column;
height: 530px;
justify-content: space-between;
`;

export const ProfileContainer = styled.div`
height: 450px;
position: relative;
`;

export const ProfileImg = styled.img`
width: 100%;
height: 100%;
padding: 15px;
border-radius: 20px;
filter: drop-shadow(0px 3px 5px black);
`;

export const ProfileInfo = styled.div`
position: absolute;
width: 420px;
left: 20px;
bottom: 50px;
padding: 5px;
color: white;
text-shadow: black 0.1em 0.1em 0.2em
`;

export const ProfileBio = styled.div`
    margin: 0;
`;

export const ProfileNameAge = styled.div`
display: flex;
align-items: center;
height: 60px;

p {
    font-size: 32px;
    padding-left: 5px;
}
`;

export const MatchIconContainer = styled.div`
display: flex;
height: 80px;
justify-content: space-evenly;
align-items: center;
`;

export const HeartIcon = styled.button`
border: none;
 border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  color: green;
  cursor: pointer;
  z-index: 2;

  :hover {
    background-color: green;
    color: #ffffff;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

export const XIcon = styled.button`
border: none;
border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  color: #ff0000;
  cursor: pointer;

  :hover {
    background-color: #ff0000;
    color: white;
    transform: scale(1.05);
    transition: all 0.3s ease 0s;
  }
`;

export const WarningNoUser = styled.div`
display: flex;
flex-direction: column;
height: 450px;
margin: auto;
color: #762d93;
width: 50%;
justify-content: center;
align-items: center;
`