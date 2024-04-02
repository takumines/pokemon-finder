"use client";

import Image from "next/image";

type PokemonImageProps = {
  image: string;
  name: string;
  width?: number;
  height?: number;
};

const PokemonImage = (props: PokemonImageProps) => {
  const { image, name, width = 300, height = 300 } = props;
  return (
    <Image
      src={image}
      alt={`picture of ${name}`}
      priority
      width={width}
      height={height}
      style={{ objectFit: "contain" }}
      className="transition-opacity opacity-0 duration-[2s] mx-auto"
      onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
    />
  );
};

export default PokemonImage;
