"use client";

import { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import PokemonCard from "@/app/pokemons/_components/pokemon-card";
import { NamedAPIResource } from "pokenode-ts";
import { extractIdFromUrl } from "@/app/_lib/utils";
import { getPokemonList } from "@/app/_api/pokemon/get-pokemon";
import InfiniteScroll from "react-infinite-scroller";

const PokemonGrid = () => {
  const [searchText, setSearchText] = useState("");
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);
  const [hasMoreScroll, setHasMoreScroll] = useState(true);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const loadMore = async () => {
    const res = await getPokemonList(pokemonList.length);
    // 読み込むデータが存在しない場合、
    if (res.length < 1) {
      setHasMoreScroll(false);
      return;
    }

    setPokemonList([...pokemonList, ...res]);
  };

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            placeholder="Mew"
            autoComplete="off"
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            value={searchText}
            id="pokemonName"
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMoreScroll}>
        <div className="mb-32 gap-3 grid md:grid-cols-2 text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
          {filteredPokemonList.map((pokemon) => {
            const id = extractIdFromUrl(pokemon.url);
            return (
              id && (
                <PokemonCard id={id} name={pokemon.name} key={pokemon.name} />
              )
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default PokemonGrid;
