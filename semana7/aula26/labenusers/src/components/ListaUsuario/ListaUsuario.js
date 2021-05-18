import React from "react";
import axios from 'axios';
import { ContainerUsuarios } from "./styled";


export default class ListaUsuario extends React.Component {
    state = {
        usuarios: []
    };

    componentDidMount() {
        this.getUsuarios();
    }

    getUsuarios = () => {
        const header = {
            headers: {
                Authorization: "pedro-barbosa-paiva"
            }
        };

        const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
            .get(BASE_URL, header)
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert(err)
            });
    };

    render() {
        const usuarioComponents = this.state.usuarios.map((usuario) => {
            return <li key={usuario.id}>{usuario.name}</li>
        });
        return (
            <ContainerUsuarios>
                {usuarioComponents}
            </ContainerUsuarios>
        )
    }

}