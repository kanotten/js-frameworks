const root = document.querySelector("#root");

let count = 0;

function App() {
  const app = document.createElement("div");
  app.textContent = "Hello World";

  app.appendChild(Card());
  app.appendChild(Button());

  return app;
}

function Card() {
  const card = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Title";
  const content = document.createElement("p");
  content.textContent = "this is the content";

  card.append(title, content);
  return card;
}

function Button() {
  const button = document.createElement("button");
  button.textContent = `Do you dare? ${count}`;

  button.addEventListener("click", () => {
    count++;
    console.log("You are brave, count is " + count);
    button.textContent = `Do you dare? ${count}`;
  });

  return button;
}

function render() {
  root.innerHTML = "";
  root.appendChild(App());
}

render();
