import { pokemonApi } from "@/app/_lib/pokemon-api";
import {
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon as ResponsePokemon,
} from "pokenode-ts";
import { ResponseError } from "@/app/_api/error/response-error";
import { handlerError } from "@/app/_api/error/handler-error";
import { extractIdFromUrl } from "@/app/_lib/utils";

export interface Pokemon extends NamedAPIResource {
  id: number;
  imageUrl: string;
}

export const getPokemonList = async (offset: number = 0) => {
  try {
    const res = await pokemonApi(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
    );
    const data: NamedAPIResourceList = await res.json();

    // ポケモンの画像は別APIから取得する必要があるので、それぞれのポケモンの詳細情報を取得する
    const pokemonList: Pokemon[] = await Promise.all(
      data.results.map(async (result) => {
        const id = extractIdFromUrl(result.url);
        if (!id) throw new Error("Pokemon ID not found");
        const pokemon = await getPokemonById(id);
        const imageUrl =
          pokemon?.sprites.other?.["official-artwork"].front_default ||
          "pokemons-not-found.png";

        return {
          ...result,
          id,
          imageUrl,
        };
      }),
    );

    return pokemonList;
  } catch (err) {
    handlerError(err);
  }
};

export const getPokemonById = async (id: number) => {
  try {
    const res = await pokemonApi(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data: ResponsePokemon = await res.json();

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
