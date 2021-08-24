import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./App-Styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalState>
          <Header />
          <Router />
        </GlobalState>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
