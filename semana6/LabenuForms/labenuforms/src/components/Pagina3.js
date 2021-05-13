import React from "react";
import ContainerInput from "./ContainerInput"
import ContainerSelect from "./ContainerSelect"

export class Pagina3 extends React.Component {
    render() {
        return (

            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <ContainerInput pergunta={"5. Por que você não terminou um curso de graduação?"} />
                <ContainerSelect pergunta={"6. Você fez algum curso complementar?"}
                    opcoes={[
                        "Curso técnico",
                        "Cursos de inglês",
                        "Não fiz curso complementar"
                    ]}
                />
            </div>
        );
    }
}

export default Pagina3;