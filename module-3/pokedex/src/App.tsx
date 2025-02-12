import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { Layout } from "./layout";
import { Pokemon } from "./routes/Pokemon";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: ":page", element: <Home /> },
      { path: "", element: <Home /> },
      { path: "pokemon/:name", element: <Pokemon /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

/*  
url.com/pokemon/:name
url.com/:name
url.com/:id
url.com/:page
url.com/?page=1
url.com/pokemon/:id

first solution:
url.com/pokemon/:name for pokemon
and 
url.com/:page for pages
*/
