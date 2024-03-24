"use client";
import Link from "next/link";
import { getPokemonById } from "@/app/_api/pokemon/get-pokemon";
import { Suspense } from "react";
import PokemonImage from "@/app/pokemons/_components/pokemon-image";
import Spinner from "@/app/components/element/spinner";

interface PokemonCardProps {
  id: number;
  name: string;
}

const PokemonCardImage = async ({ id, name }: PokemonCardProps) => {
  const pokemon = await getPokemonById(id);
  const pokemonImage = pokemon?.sprites.other
    ? pokemon.sprites.other["official-artwork"].front_default
    : null;

  const image = pokemonImage ? pokemonImage : "pokemons-not-found.png";

  return <PokemonImage image={image} name={name} />;
};

const PokemonCard = ({ id, name }: PokemonCardProps) => {
  return (
    <Link
      href={`/pokemons/${id}`}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <Suspense fallback={<Spinner className="mx-auto" />}>
        <PokemonCardImage id={id} name={name} />
      </Suspense>
      <h2 className="text-2xl font-semibold text-center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
};

export default PokemonCard;
