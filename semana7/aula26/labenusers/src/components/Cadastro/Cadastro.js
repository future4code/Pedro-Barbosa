import React from 'react';
import axios from 'axios';
import { ContainerCadastro } from './styled';

export default class Cadastro extends React.Component {
    state = {
        name: "",
        email: "",
        pagina: "cadastro"
    };

    handleNome = (event) => {
        this.setState({ name: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    criarUsuarios = () => {
        const header = {
            headers: {
                Authorization: "pedro-barbosa-paiva"
            }
        };

        const body = {
            name: this.state.name,
            email: this.state.email
        }

        const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
            .post(BASE_URL, body, header)
            .then((res) => {
                alert("Cadastro feito com sucesso!");
            })
            .catch((err) => {
                alert("heh");
            });
    };

    paginaListaUsuario = () => {
        this.setState({ pagina: "lista usuario" })
    }


    render() {
        return (
            <ContainerCadastro>
                <input
                    onChange={this.handleNome}
                    value={this.state.name}
                    placeholder="Nome" />
                <input
                    onChange={this.handleEmail}
                    value={this.state.email}
                    placeholder="E-mail"
                />
                <button onClick={this.criarUsuarios}>Cadastrar</button>


            </ContainerCadastro>
        )
    }
}
