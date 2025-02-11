import "./App.css";
import { Link } from "react-router-dom";
import { Layout } from "./layout";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Home path!</h1>
      <p>Some content</p>
      <Card>
        <p>Content for the card</p>
        <p>Some more content</p>
      </Card>
      <Card>
        <p>another card</p>
        <p>another card content</p>
      </Card>
    </>
  );
}

export default App;
