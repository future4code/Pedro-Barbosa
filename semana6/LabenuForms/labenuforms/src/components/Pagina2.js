import React from "react";
import ContainerInput from "./ContainerInput"

export class Pagina2 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <ContainerInput pergunta={"5. Qual curso?"} />
                <ContainerInput pergunta={"6. Qual a unidade do ensino?"} />
            </div>
        );
    }
}

export default Pagina2;