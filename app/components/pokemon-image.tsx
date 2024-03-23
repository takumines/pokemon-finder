"use client";

import Image from "next/image";

const PokemonImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <Image
      src={image}
      alt={`picture of ${name}`}
      priority
      fill
      style={{ objectFit: "contain" }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
};

export default PokemonImage;
