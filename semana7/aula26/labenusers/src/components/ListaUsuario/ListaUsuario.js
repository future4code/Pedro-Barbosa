import React from "react";
import axios from 'axios';
import DetalhesUsuario from '../DetalhesUsuario/DetalhesUsuario'
import { ContainerUsuarios, CardUsuarios } from "./styled";


export default class ListaUsuario extends React.Component {
    state = {
        usuarios: []
    };

    componentDidMount() {
        this.getUsuarios();
    }

    getUsuarios = async () => {
        const header = {
            headers: {
                Authorization: "pedro-barbosa-paiva"
            }
        };

        const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const res = await axios
                .get(BASE_URL, header)

            this.setState({ usuarios: res.data })
        } catch (err) {
            alert("Ocorreu um problema! Tente novamente.")
        }

    }

    mudaPagina = () => {
        if (this.state.pagina === "lista usuario") {
            this.setState({ pagina: 'detalhes' })
        }
    }


    deletarUsuarios(id) {
        const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const header = {
            headers: {
                Authorization: "pedro-barbosa-paiva"
            }
        };

        if (window.confirm("Tem certeza de que deseja deletar?")) {
            axios
                .delete(BASE_URL, header)
                .then((res) => {
                    this.getUsuarios();
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }



    render() {
        const usuarioComponents = this.state.usuarios.map((usuario) => {
            return (<CardUsuarios key={usuario.id}>
                <p onClick={this.props.detalhes}>{usuario.name}</p>
                <button onClick={() => this.deletarUsuarios(usuario.id)}>x</button>
            </CardUsuarios>
            )
        });

            return (
                <ContainerUsuarios>
                    <h1>Lista de usuários</h1>
                    {usuarioComponents}
                </ContainerUsuarios>
            )
       
    }
}
