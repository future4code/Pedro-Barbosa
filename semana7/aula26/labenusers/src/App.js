import { ContainerGeral, ContainerBotao } from './styled';
import React from 'react';
import Cadastro from './components/Cadastro/Cadastro'
import ListaUsuario from './components/ListaUsuario/ListaUsuario'
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

export default class App extends React.Component {
  state = {
    pagina: "cadastro",
  };

  componentDidUpdate() {
    console.log(this.state.pagina)
}

  renderizaPagina = () => {
    if (this.state.pagina === "cadastro") {
      return <Cadastro />
    } else if (this.state.pagina === "lista usuario") {
      return <ListaUsuario detalhes={this.paginaDetalhes} />
    } else if (this.state.pagina === "detalhes") {
      return <DetalhesUsuario />
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

  paginaDetalhes = () => {
    if(this.state.pagina === "lista usuario" || "cadastro") {
      this.setState({ pagina: "detalhes" })
    }
  }


  render() {
    return (
      <ContainerGeral>
        {this.renderizaPagina()}
        {this.state.pagina !== "lista usuario" && "detalhes" && (
          <ContainerBotao>
            <button onClick={this.paginaListaUsuario}>Lista de usuários</button>
          </ContainerBotao>
        )}
        {this.state.pagina !== "cadastro" && "detalhes" && (
          <ContainerBotao >
            <button onClick={this.paginaCadastro}>Voltar</button>
          </ContainerBotao>
        )}

      </ContainerGeral>
    )


  }


}