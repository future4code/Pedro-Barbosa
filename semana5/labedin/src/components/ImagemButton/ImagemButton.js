import React from 'react';
import { ContainerImagem } from "./styled";

function ImagemButton(props) {
    return (
        <ContainerImagem>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerImagem>

    );
}

export default ImagemButton;