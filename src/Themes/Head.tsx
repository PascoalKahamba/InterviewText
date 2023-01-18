import { Button, Header } from "../MyStyles";
import Switch from "react-switch";
const Head = () => {
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
        onColor="white"
      />
    </Header>
  );
};

export default Head;
