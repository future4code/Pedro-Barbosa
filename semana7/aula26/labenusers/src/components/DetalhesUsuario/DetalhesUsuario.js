import React from "react";
import axios from 'axios';
// import {  } from "./styled";

export default class DetalhesUsuario extends React.Component {
    state = {
        usuario: []
    }


    componentDidMount() {
        this.getUsuario();
    }

    getUsuario = async (id) => {
        const header = {
            headers: {
                Authorization: "pedro-barbosa-paiva"
            }
        };

        const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        try {
            const res = await axios
                .get(BASE_URL, header)
            this.setState({ usuario: res.data })

        } catch (err) {
            alert("Desculpe! Houve um erro.")
        }
    }




    render() {
        const detalheUsuario = this.state.usuario.map((usuario) => {
            return (<div key={usuario.id}>
                {usuario.name}
                {usuario.email}
            </div>
            )
        });

        return (
            <div>
                {detalheUsuario}
            </div>
        )
    }

}