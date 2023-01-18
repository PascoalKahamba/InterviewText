import { useContext } from "react";
import { Button, Header } from "./MyStyles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import light from "./Themes/light";
interface HeadProps {
  toggleTheme: () => void;
}
const Head = ({ toggleTheme }: HeadProps) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Header>
      {" "}
      <div className="buttons">
        <Button>adicionar</Button>
        <Button>desfazer</Button>
      </div>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={45}
        handleDiameter={24}
        onColor={colors.secundary}
      />
    </Header>
  );
};

export default Head;
