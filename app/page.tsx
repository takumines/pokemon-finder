import PokemonGrid from "@/app/pokemon/_components/pokemon-grid";
import { getPokemonList } from "@/app/_api/pokemon/get-pokemon";

const Top = async () => {
  const pokemonList = await getPokemonList();

  return <PokemonGrid pokemonList={pokemonList} />;
};

export default Top;
