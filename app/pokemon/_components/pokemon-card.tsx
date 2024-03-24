import Link from "next/link";
import { getPokemonById } from "@/app/_api/pokemon/get-pokemon";
import { useEffect, useState } from "react";
import { Pokemon } from "pokenode-ts";
import PokemonImage from "@/app/pokemon/_components/pokemon-image";
import Spinner from "@/app/components/element/spinner";

interface PokemonCardProps {
  id: number;
  name: string;
}

const PokemonCard = ({ id, name }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const fetchPokemon = async (id: number) => {
    const pokemon = await getPokemonById(id);
    if (!pokemon) {
      return;
    }
    setPokemon(pokemon);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  const getPokemonImage = (pokemon: Pokemon) => {
    const image = pokemon.sprites.other
      ? pokemon.sprites.other["official-artwork"].front_default
      : null;

    return image ? image : "pokemon-not-found.png";
  };

  return (
    <Link
      href={`/pokemon/${id}`}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      {pokemon ? (
        <PokemonImage image={getPokemonImage(pokemon)} name={name} />
      ) : (
        <Spinner className="mx-auto" />
      )}
      <h2 className={`text-2xl font-semibold`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
};

export default PokemonCard;
