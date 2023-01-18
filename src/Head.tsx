import { useContext } from "react";
import { Button, Header } from "./MyStyles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
const Head = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Header>
      {" "}
      <div className="buttons">
        <Button>adicionar</Button>
        <Button>desfazer</Button>
      </div>
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={45}
        handleDiameter={24}
        offColor="black"
        onColor={colors.secundary}
      />
    </Header>
  );
};

export default Head;
