import React from 'react';
import { ContainerCardP } from './styled';

function CardPequeno(props) {
    return (
        <ContainerCardP>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </ContainerCardP>
    )
}

export default CardPequeno;