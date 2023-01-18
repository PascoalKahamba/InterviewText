import { ThemeProvider } from "styled-components";
import { GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";

import Head from "./Themes/Head";
const App = () => {
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
