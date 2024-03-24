import Image from "next/image";

const PokemonDetailNotFound = () => {
  return (
    <div className="mt-8">
      <Image
        src="/pokemon-not-found.png"
        alt="Pokemon not found"
        width={200}
        height={200}
        className="mx-auto"
        priority
      />
      <h1 className="text-[32px] mt-8 text-center">Pokemon not found</h1>
    </div>
  );
};

export default PokemonDetailNotFound;
