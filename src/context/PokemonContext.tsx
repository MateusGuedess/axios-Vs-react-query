import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
}

interface Pokemon {
  fav: favPokemon[];
  removeFavPokemon: (item: favPokemon) => void;
  setFavPokemon: (item: favPokemon) => void;
}

interface favPokemon {
  name: string;
}

export const PokemonContext = createContext<Pokemon>({} as Pokemon);

export function PokemonContextProvider({ children }: Props) {
  const [fav, setFav] = useState<favPokemon[]>([]);

  function setFavPokemon(newFav: favPokemon) {
    return setFav((prevState) => [...prevState, newFav]);
  }

  function removeFavPokemon(removeFav: favPokemon) {
    return setFav((prevState) => [
      ...prevState.filter((item: favPokemon) => item !== removeFav),
    ]);
  }

  useEffect(() => {
    console.log(fav);
  }, [fav]);

  return (
    <PokemonContext.Provider value={{ fav, setFavPokemon, removeFavPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
