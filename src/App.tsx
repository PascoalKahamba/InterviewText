import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./MyStyles";
import axios from "axios";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import usePersistedState from "./Hooks/usePersistedState";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PageItem from "./PageItem";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    request("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  }, [request]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pageItem" element={<PageItem />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
