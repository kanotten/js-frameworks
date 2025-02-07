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
  }, [url]); // ✅ Added dependency so URL updates trigger data fetch

  return (
    <>
      <h1 className="text-3xl font-bold text-orange-500">Pokédex</h1>

      {data.map((pokemon, index) => (
        <h2 key={index}>{pokemon.name}</h2>
      ))}

      <div>
        {previousUrl ? (
          <button
            onClick={() => setUrl(previousUrl)}
            className="border p-2 cursor-pointer"
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
            onClick={() => setUrl(nextUrl)}
            className="border p-2 cursor-pointer"
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
