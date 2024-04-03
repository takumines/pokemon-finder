"use client";
import Link from "next/link";
import { Pokemon } from "@/app/_api/pokemon/get-pokemon";
import { Suspense } from "react";
import PokemonImage from "@/app/pokemons/_components/pokemon-image";
import Spinner from "@/app/components/element/spinner";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const { id, name, imageUrl } = pokemon;
  return (
    <Link
      href={`/pokemons/${id}`}
      className="
      w-full
      group rounded-lg border border-transparent p-4 transition-colors dark:border-gray-500
      hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
      "
      key={name + "Card"}
    >
      <Suspense fallback={<Spinner className="mx-auto" />}>
        <PokemonImage image={imageUrl} name={name} />
      </Suspense>
      <h2 className="text-2xl font-semibold text-center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
};

export default PokemonCard;
