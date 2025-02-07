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
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold text-orange-500 mb-6">Pokédex</h1>

      <ul className="bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-4 space-y-2">
        {data.map((pokemon, index) => (
          <li
            key={index}
            className="text-lg font-semibold text-center bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition"
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>

      <div className="flex justify-between w-full max-w-md mt-6">
        {previousUrl ? (
          <button
            onClick={() => setUrl(previousUrl)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition"
          >
            Prev
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-md shadow-md cursor-not-allowed"
          >
            Prev
          </button>
        )}
        {nextUrl ? (
          <button
            onClick={() => setUrl(nextUrl)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition"
          >
            Next
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-md shadow-md cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
