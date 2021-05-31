import axios from 'axios';
import React from 'react';
import { ContainerTarefas, ContainerPage } from './styled';


const BASE_URL = 'http://www.boredapi.com/api/activity/'
export default class App extends React.Component {
  state = {
    atividades: [],
    inputTipo: [],
    inputParticipantes: 0,
    inputPreço: ""
  }

  handleParticipants = (event) => {
    this.setState({ inputParticipantes: event.target.value })
  }

  getAtividade = () => {
    axios
      .get(BASE_URL)
      .then((res) => {
        this.setState({ atividades: res.data })
      })
      .catch((err) => {
        alert("Deu ruim!")
      })
  }

  getParticipantes = () => {
    axios
      .get(`http://www.boredapi.com/api/activity?participants=${this.state.inputParticipantes}`)
      .then((res) => {
        this.setState({ atividades: res.data })
      })
  }



  render() {

    const { activity, type, participants, price } = this.state.atividades
    return (
      <ContainerPage>
        <h1>Gerador de tarefas aleatórias</h1>
        <p>Está entediado? Veio a ao lugar certo! Para gerar uma tarefa aleatória...</p>
        <button onClick={this.getAtividade}>Clique aqui!</button>
        <ContainerTarefas>
          <p>Atividade:</p> <p>{activity}</p>
          <p>Tipo: </p> <p>{type}</p>
          <p>Participantes: </p> <p>{participants}</p>
          <p>Preço: </p> <p>{price}</p>
        </ContainerTarefas>
      </ContainerPage>
    )
  }

}