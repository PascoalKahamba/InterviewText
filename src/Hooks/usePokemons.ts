import { useEffect, useState } from "react";
import { fetchPokemons, PokemonDetails } from "../services/pokemonAPI";

const TOTTAL_ITEMS_TO_SHOW = 10;

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [moreItems, setMoreItems] = useState(0);

  useEffect(() => {
    getPokemons();
  }, [moreItems]);

  function loadMorePokemons() {
    setMoreItems((prev) => prev + TOTTAL_ITEMS_TO_SHOW);
  }
  async function getPokemons() {
    setLoading(true);
    const detailsPokemons = await fetchPokemons(moreItems);
    const sortedPokemons = [...pokemons, ...detailsPokemons].sort((p1, p2) => {
      return p1.name > p2.name ? 1 : -1;
    });
    setPokemons(sortedPokemons);
    setLoading(false);
  }

  return {
    pokemons,
    loading,
    loadMorePokemons,
  };
};

export default usePokemons;
