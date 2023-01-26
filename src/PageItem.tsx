import axios from "axios";
import { useState, useEffect } from "react";
import { DivFlex } from "./MyStyles";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { IconContext } from "react-icons/lib/esm/iconContext";

interface PageProps {
  data: {
    name: string;
    url: string;
  };
}
interface DetailsProps {
  base_experience: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

type DownProps = React.MouseEventHandler<SVGElement> | undefined;
const PageItem = ({ data }: PageProps) => {
  const [details, setDetails] = useState<DetailsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scroll, SetScroll] = useState(false);

  const handleScroll = () => {
    console.log("Scroll page");
    SetScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleDown: DownProps = () => {
    console.log("Cima");
    console.log("first" + innerHeight);
    console.log("last" + outerHeight);

    const heightBody = Math.max(document.body.scrollHeight);
    const heightElement = innerHeight;

    window.scrollBy(heightElement, heightBody);
  };

  useEffect(() => {
    async function useDetails() {
      setLoading(true);
      const response = await axios.get<DetailsProps>(data.url);
      const json = response.data;
      setDetails([...details, json]);
      console.log(details);
      console.log(json);
      setLoading(false);
    }
    useDetails();
  }, [setDetails]);
  if (loading) return <div className="loading"></div>;
  return (
    <DivFlex>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {scroll && <FiArrowDown onClick={handleDown} />}
        {details.map(({ name, base_experience, sprites }) => (
          <div key={name}>
            <img src={sprites.front_default} alt={`photo pokemon ${name}`} />
            <p>
              Nome: <span>{name}</span>
            </p>
            <p>
              Experiência: <span> {base_experience}</span>
            </p>
          </div>
        ))}
      </IconContext.Provider>
    </DivFlex>
  );
};

export default PageItem;
