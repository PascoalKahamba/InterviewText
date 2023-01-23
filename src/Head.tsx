import { useContext } from "react";
import { Button, Header } from "./MyStyles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface HeadProps {
  toggleTheme: () => void;
}
const Head = ({ toggleTheme }: HeadProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Header>
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
