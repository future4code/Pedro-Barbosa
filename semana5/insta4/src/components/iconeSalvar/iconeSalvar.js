import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content:flex-end;

    
`
const IconImage = styled.img`
    height:40px;
    width:40px;
`

export function IconeSalvar(props) {
    return <IconContainer>
        <IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
    </IconContainer>
}
