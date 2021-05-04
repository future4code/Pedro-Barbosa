import React from 'react';
import { ContainerCardG } from './styled';

function CardGrande(props) {
    return (
        <ContainerCardG>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </ContainerCardG>
    )
}

export default CardGrande;