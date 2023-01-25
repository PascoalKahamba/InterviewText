import { DefaultTheme, ThemeProvider } from "styled-components";
import Head from "./Head";
import { GetProps } from "./Hooks/useFetch";
import usePersistedState from "./Hooks/usePersistedState";
import { GlobalStyle, Section } from "./MyStyles";
import PageItem from "./PageItem";
import dark from "./Themes/dark";
import light from "./Themes/light";

interface HomeProps {
  data: GetProps[];
}
const Home = ({ data }: HomeProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const newData = [...data];

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <Section>
        {data
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((item) => (
            <PageItem data={item} key={item.name} />
          ))}
      </Section>
    </ThemeProvider>
  );
};

export default Home;
