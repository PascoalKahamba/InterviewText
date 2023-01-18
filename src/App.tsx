import { ThemeProvider } from "styled-components";
import { Button, GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";
import Switch from "react-switch";
const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Section>
        <div className="buttons">
          <Button>adicionar</Button>
          <Button>desfazer</Button>
        </div>
        <Switch />
      </Section>
    </ThemeProvider>
  );
};

export default App;
