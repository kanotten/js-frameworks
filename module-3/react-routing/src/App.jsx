import { useState } from "react";
import "./App.css";

function App() {
  const [route, setRoute] = useState("");
  const path = window.location.pathname;
  console.log(path);

  return (
    <>
      <header>
        <a href="/" className="text-blue-500 mx-4">
          Home
        </a>
        <a href="/about" className="text-blue-500 mx-4">
          About
        </a>
      </header>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </>
  );
}

export default App;
