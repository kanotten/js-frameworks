import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setLoading] = useState(true);
  const { name } = useParams();
  const [moveFilter, setMoveFilter] = useState("");
  type Pokemon = {
    abilites: [
      {
        ability: {
          name: string;
          url: string;
        };
      }
    ];
    id: number;
    sprites: {
      front_default: string | null;
    };
    moves: [
      {
        move: { name: string; url: string };
      }
    ];
  };
  useEffect(() => {
    async function getData() {
      //Log out the fetched data for the pokemon
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
      const data: Pokemon = await res.json();
      console.log(data);
      setPokemon(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      <h1>{name}</h1>

      {isLoading ? (
        <h2>Loaading...</h2>
      ) : (
        <div>
          {pokemon && (
            <>
              <h2>ID: {pokemon.id}</h2>
              <img
                src={pokemon.sprites.front_default || "/placeholder/img"}
                alt={name}
              />
              <div>
                <input
                  type="text"
                  className="border"
                  onChange={(e) => {
                    setMoveFilter(e.target.value);
                  }}
                />
                {/* Log out the values typed in the field*/}
                {pokemon.moves
                  .filter(({ move }) => move.name.includes(moveFilter))
                  .map(({ move }) => {
                    return <p key={move.name}>{move.name}</p>;
                  })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
