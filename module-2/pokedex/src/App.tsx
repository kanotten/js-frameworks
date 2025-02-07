import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [data, setData] = useState([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  type pokemon = {
    name: string;
    url: string;
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPreviousUrl(data.previous);
      setNextUrl(data.next);
      setData(data.results);
    }
    getData();
  }, [url]);

  return (
    <>
      <h1 className="text-3xl font-bold text-orange-500">Pokédex</h1>
      {data.map((pokemon: pokemon) => {
        const splitString = pokemon.url.split("/");
        const id = splitString[6];
        //const id = splitString[splitString.length-2];
        return (
          <div>
            <h2 key={pokemon.name}>{pokemon.name}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt=""
            />
          </div>
        );
      })}

      <div>
        {previousUrl ? (
          <button
            className="border p-2 cursor-pointer"
            onClick={() => {
              setUrl(previousUrl);
            }}
          >
            prev
          </button>
        ) : (
          <button
            disabled
            className="border p-2 bg-neutral-600 cursor-not-allowed"
          >
            prev
          </button>
        )}
        {nextUrl ? (
          <button
            className="border p-2 cursor-pointer"
            onClick={() => {
              setUrl(nextUrl);
            }}
          >
            next
          </button>
        ) : (
          <button
            disabled
            className="border p-2 bg-neutral-600 cursor-not-allowed"
          >
            next
          </button>
        )}
      </div>
    </>
  );
}

export default App;

/*

Url for sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
Url from our pokeAPI : "https://pokeapi.co/api/v2/pokemon/33/"

splitting strings?: const splitArray = pokemon.url.split("/");  log out splitArray
using url object?
searching through string?
hard coding a test solution?

*/
