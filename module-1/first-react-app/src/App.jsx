/*eslint-disable*/
import { useState } from "react";
import { Greeting } from "./components/Greeting";
import { Counter } from "./components/Counter";
function App() {
  function Component({ title = "test", description = "test" }) {
    return (
      <div style={{ border: "1px solid" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header>This is my header</header>
      <main>
        <h1>Main element</h1>
        <Component
          title="My first Component"
          description="Description for my first component"
        />
        <Component />
        <Greeting />
        <Counter />
      </main>
      <footer>This is my footer</footer>
    </div>
  );
}

export default App;
