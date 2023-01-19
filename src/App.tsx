import { DefaultTheme, ThemeProvider } from "styled-components";
import { Circle, GlobalStyle, Section } from "./MyStyles";
import light from "./Themes/light";
import dark from "./Themes/dark";
import Head from "./Head";
import usePersistedState from "./Hooks/Hooks/usePersistedState";
import { useState } from "react";

type CircleProps = React.MouseEventHandler<HTMLElement> | undefined;

export interface CoordinatesProps {
  clientX: number;
  clientY: number;
}
const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const [circles, setCircle] = useState<CoordinatesProps[]>([]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleCircle: CircleProps = (event) => {
    const { clientX, clientY } = event;
    setCircle([...circles, { clientX, clientY }]);
    console.log(circles);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section onClick={handleCircle}>
        <Head toggleTheme={toggleTheme} />
        {circles.map(({ clientX, clientY }, index) => (
          <Circle key={index} left={clientX - 5} top={clientY - 5}></Circle>
        ))}
      </Section>
    </ThemeProvider>
  );
};

export default App;
