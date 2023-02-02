import { useState, useEffect, useMemo } from "react";
import { DivFlex, FatherLoading } from "./MyStyles";
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
export interface DetailsProps {
  base_experience: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const PageItem = ({ url }: PageProps) => {
  const [scroll, SetScroll] = useState(0);

  const { data, request, loading } = useFetch<DetailsProps>();

  let heightBody: number = 0;

  window.addEventListener("scroll", () => {
    heightBody = document.body.scrollHeight;
    console.log("body ", heightBody);
    let currentHeight = window.scrollY;
    SetScroll(+window.scrollY);
    console.log("currentHeight ", currentHeight);
  });

  useEffect(() => {
    request(url.url);
  }, []);

  const pokemonList = useMemo(() => {
    if (!data) return null;
    const { name, base_experience, sprites } = data;
    return (
      <div>
        <img src={sprites.front_default} alt={`photo pokemon ${name}`} />
        <p>
          Nome: <span>{name}</span>
        </p>
        <p>
          Experiência: <span> {base_experience}</span>
        </p>
      </div>
    );
  }, [data]);

  if (loading) return <div></div>;

  return (
    <DivFlex>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {scroll > 50 ? (
          <>
            {scroll > heightBody / 2 ? (
              <FiArrowUp onClick={() => window.scrollTo(heightBody, 0)} />
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
