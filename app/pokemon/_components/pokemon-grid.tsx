"use client";

import { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import PokemonCard from "@/app/pokemon/_components/pokemon-card";
import { NamedAPIResource } from "pokenode-ts";
import { extractIdFromUrl } from "@/app/_lib/utils";

const PokemonGrid = ({ pokemonList }: { pokemonList: NamedAPIResource[] }) => {
  const [searchText, setSearchText] = useState("");

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
  );

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
      <div className="mb-32 grid md:grid-cols-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {filteredPokemonList.map((pokemon) => {
          const id = extractIdFromUrl(pokemon.url);
          return (
            id && <PokemonCard id={id} name={pokemon.name} key={pokemon.name} />
          );
        })}
      </div>
    </>
  );
};

export default PokemonGrid;
