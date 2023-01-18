import { ThemeProvider } from "styled-components";
import { GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? light : dark);
  };
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Section>
        <Head />
      </Section>
    </ThemeProvider>
  );
};

export default App;
