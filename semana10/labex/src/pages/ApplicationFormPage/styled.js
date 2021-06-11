import styled from "styled-components"

export const FormBoxApplication = styled.form`
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
