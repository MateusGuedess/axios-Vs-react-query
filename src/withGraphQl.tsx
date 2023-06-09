import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { PokemonContext } from "./context/PokemonContext";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function WithGraphQl() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const { setFavPokemon, removeFavPokemon } = useContext(PokemonContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default WithGraphQl;
