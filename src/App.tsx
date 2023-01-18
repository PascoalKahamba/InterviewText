import { ThemeProvider } from "styled-components";
import { GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(light);

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
