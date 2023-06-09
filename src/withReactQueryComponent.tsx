import { useQuery } from "@tanstack/react-query";
import axios from "./api";
import { useContext, useEffect } from "react";
import { PokemonContext } from "./context/PokemonContext";
interface Pokemons {
  results: {
    name: string;
    url: string;
  }[];
}

function WithReactQueryComponent(): JSX.Element {
  const { fav, setFavPokemon, removeFavPokemon } = useContext(PokemonContext);

  const { data, isLoading, isError } = useQuery<Pokemons>(
    ["Pokemons"],
    async () => {
      const response = await axios.get("pokemon?limit=100000&offset=0");
      return response.data;
    }
  );

  useEffect(() => {
    console.log("FAV: ", fav);
  }, [fav]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {data.results.map((pokemon) => {
        console.log(fav);
        // const favPokemon = fav ? fav?.find((item) => item == pokemon ? "FAV") : "";
        return (
          <span key={pokemon.url} onClick={() => setFavPokemon(pokemon)}>
            {pokemon.name}
            {/* {favPokemon} */}
          </span>
        );
      })}
    </div>
  );
}

export default WithReactQueryComponent;
