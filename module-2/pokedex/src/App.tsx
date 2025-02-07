import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [data, setData] = useState([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

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
  }, []);

  type pokemon = {
    name: string;
    url: string;
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-orange-500">Pokédex</h1>
      {data.map((pokemon: pokemon) => {
        return <h2>{pokemon.name}</h2>;
      })}

      <div>
        {previousUrl ? (
          <button className="border p-2 cursor-pointer">prev</button>
        ) : (
          <button
            disabled
            className="border p-2 bg-neutral-600 cursor-not-allowed"
          >
            prev
          </button>
        )}
        {nextUrl ? (
          <button className="border p-2 cursor-pointer">next</button>
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
