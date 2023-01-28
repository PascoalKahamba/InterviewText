import axios from "axios";
import { useState, useEffect, useMemo } from "react";
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

const PageItem = ({ data }: PageProps) => {
  const [details, setDetails] = useState<DetailsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [scroll, SetScroll] = useState(0);

  let heightBody: number = 0;

  window.addEventListener("scroll", () => {
    heightBody = document.body.scrollHeight;
    console.log("body " + heightBody);
    let currentHeight = window.scrollY;
    SetScroll(window.scrollY);
    console.log("currentHeight " + currentHeight);
  });

  const pokemonList = useMemo(() => {
    return details.map(({ name, base_experience, sprites }) => (
      <div key={name}>
        <img src={sprites.front_default} alt={`photo pokemon ${name}`} />
        <p>
          Nome: <span>{name}</span>
        </p>
        <p>
          Experiência: <span> {base_experience}</span>
        </p>
      </div>
    ));
  }, [details]);

  useEffect(() => {
    async function useDetails() {
      setLoading(true);
      const response = await axios.get<DetailsProps>(data.url);
      const json = response.data;
      setDetails([json]);
      console.log(details);
      console.log(json);
      setLoading(false);
    }
    useDetails();
  }, []);

  if (loading) return <div className="loading"></div>;

  return (
    <DivFlex>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {scroll > 100 ? (
          <>
            {scroll > heightBody / 2 ? (
              <FiArrowUp onClick={() => (window.scrollY = 0)} />
            ) : (
              <FiArrowDown onClick={() => window.scrollTo(0, heightBody)} />
            )}
          </>
        ) : null}

        {pokemonList}
      </IconContext.Provider>
    </DivFlex>
  );
};

export default PageItem;
