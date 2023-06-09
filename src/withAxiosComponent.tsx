import axios from "axios";
import { useEffect, useState } from "react";

interface Pokemons {
  name: string;
  url: string;
}

function WithAxiosComponent() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  async function fetchPokemons() {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const pokemonsData = response.data;
      console.log(pokemonsData);

      if (pokemonsData) setPokemons(pokemonsData.results);
    } catch (err) {}
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons.map((item) => (
        <span key={item?.name}>e</span>
      ))}
    </div>
  );
}

export default WithAxiosComponent;
