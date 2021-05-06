import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/80365763_2575637589152351_6715538665625354240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dOPaut5Iz7QAX-mWUyT&_nc_ht=scontent-gru1-1.xx&oh=81e8adbc644bdbbe9770af22566e4c4f&oe=60B59519"
          nome="Pedro Rodrigues"
          descricao="Olá, sou Pedro Rodrigues! Um estudante de desenvolvimento web full stack."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"
          nome="E-mail:"
          descricao="pr.rodriguesb@outlook.com"
        />

        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png"
          nome="Endereço:"
          descricao="Cotia, São Paulo"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://candidatos.atento.com.br/content/images/candidatos.png"
          nome="Teleperformance Brasil"
          descricao="Atendimento SAC bilíngue."
        />
        <CardGrande
          imagem="https://yt3.ggpht.com/ytc/AAUvwngRLa3p9tXMWd7kyZiYcEBWY3qQAscIobfZ-iCx9g=s900-c-k-c0x00ffffff-no-rj"
          nome="Teleperformance Brasil"
          descricao="Expert de interações bilíngue."
        />
        <CardGrande
          imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/9e6e8bbe-d737-4ca1-aaae-0523ca3ea6c9/202008102358_KIQi_i.png"
          nome="Outback Steakhouse Brasil"
          descricao="Atendimento ao cliente, reestocagem, limpeza rápida, suporte ao salão."
        />
        <CardGrande
          imagem="https://cdn.foodpass.com.br/storage/landing_pages/l/o/logo-eataly.png"
          nome="Eataly Brasil"
          descricao="Atendimento ao cliente, reestocagem, limpeza rápida, suporte ao salão."
        />
        <CardGrande
          imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/28c8baa3-d7ff-43bb-ae91-cb5f21e9ca40/202102081855_xQpw_i.png"
          nome="Le Pain Quotidien Brasil"
          descricao="Atendimento ao cliente, reestocagem, limpeza rápida, suporte ao salão."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
