const root = document.querySelector("#root");

function App() {
  const app = document.createElement("div");
  app.textContent = "Hello World!";

  return app;
}

function Card() {}

function render() {
  root.appendChild(App());
}

render();
