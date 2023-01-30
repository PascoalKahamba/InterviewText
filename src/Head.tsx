import { useContext } from "react";
import { DivOfSearch, Header } from "./MyStyles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import photo from "./img/Pokemon-logo-497D61B223-seeklogo.com.png";
import { DetailsProps } from "./PageItem";

interface HeadProps {
  toggleTheme: () => void;
  details: DetailsProps[];
}

type SearchProps = React.MouseEventHandler<HTMLButtonElement> | undefined;

const Head = ({ toggleTheme, details }: HeadProps) => {
  const { colors, title } = useContext(ThemeContext);
  const searchPokemon: SearchProps = () => {
    console.log("search pokemons");
  };

  return (
    <Header>
      <div className="photo">
        <img src={photo} alt="pokemon-photo" />
      </div>
      <DivOfSearch>
        <input type="text" placeholder="procurar pokemon" />
        <button onClick={searchPokemon}>procurar</button>
      </DivOfSearch>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={45}
        handleDiameter={24}
        onColor={shade(0.5, colors.secundary)}
      />
    </Header>
  );
};

export default Head;
