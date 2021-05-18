import { ContainerGeral } from './styled';
import React from 'react';
import Cadastro from './components/Cadastro/Cadastro'
import ListaUsuario from './components/ListaUsuario/ListaUsuario'

export default class App extends React.Component {
  state = {
    pagina: "cadastro",
  };


  renderizaPagina = () => {
    if (this.state.pagina === "cadastro") {
      return <Cadastro />
    } else {
      return <ListaUsuario />
    }
  }

  paginaListaUsuario = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "lista usuario" })
    }
  }

  paginaCadastro = () => {
    if (this.state.pagina === "lista usuario") {
      this.setState({ pagina: "cadastro" })
    }
  }


  render() {
    return (
      <ContainerGeral>
        {this.renderizaPagina()}
        {this.state.pagina !== "lista usuario" && (
          <button onClick={this.paginaListaUsuario}>Lista de usuários</button>
        )}
        {this.state.pagina !== "cadastro" && (
          <button onClick={this.paginaCadastro}>Voltar</button>
        )}

      </ContainerGeral>
    )


  }


}