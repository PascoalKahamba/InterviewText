import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import usePersistedState from "./Hooks/Hooks/usePersistedState";
const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section>
        <Head toggleTheme={toggleTheme} />
      </Section>
    </ThemeProvider>
  );
};

export default App;
