import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon API Data</h1>
      <ul>
        {data.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
