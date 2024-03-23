import { pokemonApi } from "@/app/_lib/pokemon-api";

export const getPokemonList = async () => {
  const res = await pokemonApi.listPokemons(0, 151);

  return res.results;
};

export const getPokemonByName = async (name: string) => {
  return await pokemonApi.getPokemonByName(name);
};
