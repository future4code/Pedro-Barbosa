import React from "react";
import ContainerInput from "./ContainerInput"
import ContainerSelect from "./ContainerSelect"

export class Pagina1 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <ContainerInput pergunta={"1. Qual o seu nome?"} />
                <ContainerInput pergunta={"2. Qual sua idade?"} />
                <ContainerInput pergunta={"3. Qual seu email?"} />

                <ContainerSelect pergunta={"4. Qual a sua escolaridade"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />

            </div>

        )
    }
}

export default Pagina1;