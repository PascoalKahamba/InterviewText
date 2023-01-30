import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { DivFlex } from "./MyStyles";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { IconContext } from "react-icons/lib/esm/iconContext";
import useFetch from "./Hooks/useFetch";

interface PageProps {
  url: {
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

const PageItem = ({ url }: PageProps) => {
  const [details, setDetails] = useState<DetailsProps[]>([]);
  const [scroll, SetScroll] = useState(0);
  const { data, request, loading } = useFetch<DetailsProps>();

  let heightBody: number = 0;

  window.addEventListener("scroll", () => {
    heightBody = document.body.scrollHeight;
    console.log("body " + heightBody);
    let currentHeight = window.scrollY;
    SetScroll(window.scrollY);
    console.log("currentHeight " + currentHeight);
  });

  useEffect(() => {
    request(url.url);
    if (data) setDetails([data]);
  }, [request, details]);

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
