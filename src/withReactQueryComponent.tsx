import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "./api";
import { useEffect } from "react";

interface Pokemons {
  results: {
    name: string;
    url: string;
  }[];
}

function WithReactQueryComponent() {
  const { data, isLoading, isError } = useQuery<Pokemons>(
    ["Pokemons"],
    async () => {
      const response = await axios.get("pokemon?limit=100000&offset=0");
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
        <span>{pokemon.name}ss</span>
      ))}
    </div>
  );
}

export default WithReactQueryComponent;
