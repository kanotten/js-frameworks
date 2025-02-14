import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const arr = [
    { name: "test" },
    { name: "other test" },
    { name: "thrid test" },
  ];
  const [items, setItems] = useState(arr);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(items));
  }, [items]);
  return (
    <>
      {items.map((item) => {
        return <p>{item.name}</p>;
      })}
      <button
        onClick={() => {
          const newItem = { name: "from button" };
          items.push(newItem);
          console.log(items);
          setUpdate(!update);
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;
