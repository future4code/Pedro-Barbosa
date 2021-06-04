import React, { useState } from 'react';
import { MainContainer, GlobalStyle } from './styled';
import Header from './components/Header/Header';
import MatchList from './components/MatchList/MatchList';
import MatchPage from './components/MatchPage/MatchPage';
import axios from 'axios';
import BASE_URL from './parameters';

const App = () => {
  const [page, setPage] = useState("match page");

  const goToMatchList = () => {
    if (page === "match page") {
      setPage("match list")
    };
  };

  const goToMatchPage = () => {
    if (page === "match list") {
      setPage("match page")
    };
  };

  const choosePage = () => {
    switch (page) {
      case "match page":
        return <MatchPage />
      case "match list":
        return <MatchList />
      default:
        return <MatchPage />
    };
  };

  const clear = async () => {
    const response = await axios
      .put(`${BASE_URL}/clear`);
      alert('Lista de matches apagada!')
  };


  return (
    <MainContainer>
      <GlobalStyle />
      <Header
        page={page}
        goToMatchList={goToMatchList}
        goToMatchPage={goToMatchPage}
        clear={clear}
      />
      {choosePage()}

    </MainContainer>
  );
};

export default App;
