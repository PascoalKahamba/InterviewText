import axios from "axios";
interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonDetails {
  base_experience: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const myUrl = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export async function fetchPokemons(moreItens: number) {
  const response = await myUrl.get<{ results: PokemonList[] }>(
    `/pokemon?limit=10&offset=${moreItens}`
  );

  const eachPokemon = response.data.results.map((pokemon) => {
    return axios.get<PokemonDetails>(pokemon.url);
  });

  const pokemonList = await Promise.all(eachPokemon);
  console.log(pokemonList);

  return pokemonList.map((pokemon) => pokemon.data);
}
