import styled from "styled-components"

export const HeaderHomeButton = styled.header`
display: flex;
justify-content: flex-end;
position: absolute;
top: 250px;
right: 60px;

button {
    margin: 10px;
}
`

export const Title = styled.h1`
text-align: center;
margin: 100px 0;
`

export const LogoutAndBackPosition = styled.div`
display: flex;
justify-content: flex-end;
position: absolute;
top: 220px;
left: 100px;
`

export const ButtonContainerCentralize = styled.div`
display: flex;
margin: 50px 0;
justify-content: center;
`

export const FormBox = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
max-width: 400px;
margin: 30px auto;
height: 500px;
border: 1px solid black;
padding: 20px;
background-color: rgba(89, 171, 208, 0.8);


input {
    border-radius: 3px;
    border: 1px inset rgba(0, 0, 0, 0.1) ;
    height: 30px;
    width: 80%;
    background: transparent;
}

input:focus {
    outline: none;
}

select {
    border-radius: 3px;
    border: 1px inset rgba(0, 0, 0, 0.1) ;
    height: 30px;
    width: 80%;
    background: transparent;
}

select:focus {
    outline: none;
}
`
