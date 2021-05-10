import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-around;
  width: 300px;

  button {
    margin-top: 20px;
  }
`

class App extends React.Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        id: Math.random(),
        nomeUsuario: "raposilda",
        fotoUsuario: 'https://i.pinimg.com/474x/53/51/90/53519069a832e68f2038d1c9a45aab48.jpg',
        fotoPost: 'https://img-9gag-fun.9cache.com/photo/a8GDZNO_460s.jpg',
      },

      {
        id: Math.random(),
        nomeUsuario: "ielsk",
        fotoUsuario: 'https://pbs.twimg.com/profile_images/1219395002196987904/39OV31J4_400x400.jpg',
        fotoPost: 'https://pbs.twimg.com/profile_banners/59170118/1579561363/1500x500'
      },
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  };

  handleNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };

  handleFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };

  handleFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  onClickAdicionar = () => {

    const novoPost = {
      id: Math.random(),
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
    });
  }


  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post key={post.id}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />

      );
    });

    return (
      <MainContainer>
        {listaDePosts}
        <Form>
          <input
            placeholder={"Usuário"}
            value={this.state.inputNomeUsuario}
            onChange={this.handleNomeUsuario}
          />
          <input
            placeholder={"Foto do usuário"}
            value={this.state.inputFotoUsuario}
            onChange={this.handleFotoUsuario}
          />
          <input
            placeholder={"Foto do post"}
            value={this.state.inputFotoPost}
            onChange={this.handleFotoPost}
          />
          <button onClick={this.onClickAdicionar}>Criar Post</button>
        </Form>
      </MainContainer>
    )



  }

}

export default App;
