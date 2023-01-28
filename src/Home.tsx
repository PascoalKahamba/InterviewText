import { DefaultTheme, ThemeProvider } from "styled-components";
import Head from "./Head";
import { GetProps } from "./Hooks/useFetch";
import usePersistedState from "./Hooks/usePersistedState";
import { GlobalStyle, Section, SeeMore } from "./MyStyles";
import PageItem from "./PageItem";
import dark from "./Themes/dark";
import light from "./Themes/light";

interface HomeProps {
  data: GetProps[];
  setMoreItens: React.Dispatch<React.SetStateAction<number>>;
}
const Home = ({ data, setMoreItens }: HomeProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} />
      <Section>
        <SeeMore onClick={() => setMoreItens((before) => before + 10)}>
          Ver mais
        </SeeMore>
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
