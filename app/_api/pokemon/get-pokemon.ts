import { pokemonApi } from "@/app/_lib/pokemon-api";
import { NamedAPIResourceList, Pokemon } from "pokenode-ts";
import { ResponseError } from "@/app/_api/error/response-error";
import { handlerError } from "@/app/_api/error/handler-error";

export const getPokemonList = async () => {
  const res = await pokemonApi(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
  );
  const data: NamedAPIResourceList = await res.json();

  return data.results;
};

export const getPokemonById = async (id: number) => {
  try {
    const res = await pokemonApi(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data: Pokemon = await res.json();

    return data;
  } catch (err) {
    if (err instanceof ResponseError) {
      if (err.response.status === 404) {
        return null;
      }
    }
    handlerError(err);
  }
};
