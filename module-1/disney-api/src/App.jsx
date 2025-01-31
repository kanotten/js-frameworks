import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.disneyapi.dev/character");
      const data = await res.json();
      setCharacters(data.data);
    }
    getData();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
      <h1>Disney Characters</h1>
      <div>{characters.length ? "write the code here" : "loading"}</div>
    </>
  );
}

export default App;
