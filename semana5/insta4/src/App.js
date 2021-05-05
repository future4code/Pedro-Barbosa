import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'raposilda'}
          fotoUsuario={'https://i.pinimg.com/474x/53/51/90/53519069a832e68f2038d1c9a45aab48.jpg'}
          fotoPost={'https://img-9gag-fun.9cache.com/photo/a8GDZNO_460s.jpg'}
        />
         <Post
          nomeUsuario={'ielsk'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1219395002196987904/39OV31J4_400x400.jpg'}
          fotoPost={'https://pbs.twimg.com/profile_banners/59170118/1579561363/1500x500'}
        />
      </MainContainer>

      
    );
  }
}

export default App;
