import { useContext } from "react";
import { Button, Header } from "./MyStyles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface HeadProps {
  toggleTheme: () => void;
  handleCircle: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Head = ({ toggleTheme, handleCircle }: HeadProps) => {
  const { colors, title } = useContext(ThemeContext);
  const handleClear = () => {
    console.log("Clear");
  };
  return (
    <Header>
      {" "}
      <div className="buttons">
        <Button onClick={handleCircle} disabled>
          Anular
        </Button>
        <Button onClick={handleClear}>fazer</Button>
      </div>
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
