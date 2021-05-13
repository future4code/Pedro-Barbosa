import React from 'react';
import './App.css'
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';
import PaginaFinal from './components/PaginaFinal';


class App extends React.Component {
  state = {
    pagina: 1
  };


  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return <Pagina1 />;
      case 2:
        return <Pagina2 />
      case 3:
        return <Pagina3 />
      case 4:
        return <PaginaFinal />
    }
  };

  paginaSeguinte = () => {
    this.setState({ pagina: this.state.pagina + 1 })
  }

  render() {
    return (
      <div>
        {this.renderizaPagina()}
        {this.state.pagina !== 4 && (
          <button onClick={this.paginaSeguinte}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

export default App;
