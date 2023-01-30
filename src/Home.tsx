import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "./Head";

import usePersistedState from "./Hooks/usePersistedState";
import { FatherButton, GlobalStyle, Section, SeeMore } from "./MyStyles";
import PageItem, { DetailsProps } from "./PageItem";
import { ThemeMode } from "./Styles";
import dark from "./Themes/dark";
import light from "./Themes/light";

interface HomeProps {
  data: [
    {
      name: string;
      url: string;
    }
  ];
  setMoreItens: React.Dispatch<React.SetStateAction<number>>;
}

const Home = ({ data, setMoreItens }: HomeProps) => {
  const [theme, setTheme] = usePersistedState<ThemeMode>("theme", "dark");
  const [details, setDetails] = useState<DetailsProps[]>([]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Head toggleTheme={toggleTheme} details={details} />
      <Section>
        <FatherButton>
          <SeeMore onClick={() => setMoreItens((before) => before + 10)}>
            Ver mais
          </SeeMore>
        </FatherButton>
        {data
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((item) => (
            <PageItem
              url={item}
              key={item.name}
              details={details}
              setDetails={setDetails}
            />
          ))}
      </Section>
    </ThemeProvider>
  );
};

export default Home;
