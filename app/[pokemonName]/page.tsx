import PokemonImage from "@/app/components/pokemon-image";
import { getPokemonByName } from "@/app/_api/pokemon/get-pokemon";
import { Progress } from "@/app/components/ui/progress";

const PokemonPage = async ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = params;
  const pokemon = await getPokemonByName(pokemonName);
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const image = pokemon.sprites.other
    ? pokemon.sprites.other["official-artwork"].front_default
    : null;

  return (
    <>
      <h1 className="text-4xl text-bold pt-4 ">{name}</h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        {image && <PokemonImage image={image} name={name} />}
      </div>
      <h3>Weight: {pokemon.weight}</h3>
      <div className="flex-col">
        {pokemon.stats.map((pokemonStat) => {
          const statName = pokemonStat.stat.name;
          const statValue = pokemonStat.base_stat;

          return (
            <div
              className="flex items-stretch"
              style={{ width: "500px" }}
              key={statName}
            >
              <h3 className="p-2 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokemonPage;
