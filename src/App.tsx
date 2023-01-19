import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import usePersistedState from "./Hooks/Hooks/usePersistedState";

type CircleProps = React.MouseEventHandler<HTMLElement> | undefined;
const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleCircle: CircleProps = (event) => {
    const { clientX, clientY } = event;
    console.log(clientX);
    console.log(clientY);
  };
  return (
    <ThemeProvider theme={theme}>
      <Section onClick={handleCircle}>
        <GlobalStyle />
        <Head toggleTheme={toggleTheme} />
      </Section>
    </ThemeProvider>
  );
};

export default App;
