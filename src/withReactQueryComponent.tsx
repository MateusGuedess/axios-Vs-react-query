import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

interface Pokemons {
  results: {
    name: string;
    url: string;
  }[];
}

function WithReactQueryComponent() {
  const { data, isLoading, isError } = useQuery<Pokemons>(
    ["pokemons"],
    async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      return response.data;
    }
  );

  useEffect(() => {
    console.log(data);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {data.results.map((pokemon) => (
        <span>{pokemon.name}s</span>
      ))}
    </div>
  );
}

export default WithReactQueryComponent;
