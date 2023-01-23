import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle, Section } from "./MyStyles";
import axios from "axios";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import usePersistedState from "./Hooks/Hooks/usePersistedState";
import { useEffect } from "react";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  useEffect(() => {
    async function useGetData() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      console.log(response);
      const json = await response.data;
      console.log(json);
    }
    useGetData();
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <Section></Section>
    </ThemeProvider>
  );
};

export default App;
