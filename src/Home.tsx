import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Head from "./Head";
import useFetch from "./Hooks/useFetch";

import usePersistedState from "./Hooks/usePersistedState";
import {
  FatherButton,
  FatherLoading,
  GlobalStyle,
  Section,
  SeeMore,
} from "./MyStyles";
import PageItem, { DetailsProps } from "./PageItem";
import { ThemeMode } from "./Styles";
import dark from "./Themes/dark";
import light from "./Themes/light";

interface HomeProps {
  data: {
    name: string;
    url: string;
  }[];

  setMoreItens: React.Dispatch<React.SetStateAction<number>>;
}

export interface PokemonList {
  name: string;
  url: string;
}

interface PokemonDetails extends Omit<PokemonList, "url"> {}
interface FetchProps {
  results: PokemonList[];
}

const Home = () => {
  const [theme, setTheme] = usePersistedState<ThemeMode>("theme", "dark");
  const { data, request, loading } = useFetch<FetchProps>();
  const [moreItens, setMoreItens] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);

  useEffect(() => {
    if (data) setPokemons([...pokemons, ...data.results]);
  }, [data]);

  useEffect(() => {
    request(`/pokemon?limit=10&offset=${moreItens}`);
  }, [moreItens]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // if (loading)
  //   return (
  //     <FatherLoading>
  //       <div className="loading"></div>
  //     </FatherLoading>
  //   );

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <Section>
        <FatherButton>
          <SeeMore onClick={() => setMoreItens((before) => before + 10)}>
            Ver mais
          </SeeMore>
        </FatherButton>
        {pokemons.map((item) => (
          <PageItem url={item} key={item.name} />
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default Home;
