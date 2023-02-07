import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Head from "./Head";

import usePersistedState from "./Hooks/usePersistedState";
import usePokemons from "./Hooks/usePokemons";
import {
  FatherButton,
  FatherLoading,
  GlobalStyle,
  Section,
  SeeMore,
} from "./MyStyles";
import PageItem from "./PageItem";
import ScrollControl from "./ScrollControl";
import { ThemeMode } from "./Styles";
import dark from "./Themes/dark";
import light from "./Themes/light";

const Home = () => {
  const [theme, setTheme] = usePersistedState<ThemeMode>("theme", "dark");
  const { pokemons, loading, loadMorePokemons } = usePokemons();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("theme", theme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <Section>
        <FatherButton>
          <SeeMore onClick={loadMorePokemons}>Ver mais</SeeMore>
        </FatherButton>
        {pokemons.map((item) => (
          <PageItem data={item} key={item.name} />
        ))}

        {loading && (
          <FatherLoading>
            <div className="loading"></div>
          </FatherLoading>
        )}
        <ScrollControl />
      </Section>
    </ThemeProvider>
  );
};

export default Home;
