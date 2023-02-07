import { useState, useMemo } from "react";
import { DivFlex } from "./MyStyles";

import { PokemonDetails } from "./services/pokemonAPI";

interface PageProps {
  data: PokemonDetails;
}

const PageItem = ({ data }: PageProps) => {
  const pokemonList = useMemo(() => {
    const { name, base_experience, sprites } = data;
    return (
      <div className="heightFlex">
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

  return <DivFlex>{pokemonList}</DivFlex>;
};

export default PageItem;
