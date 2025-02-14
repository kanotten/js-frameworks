import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./routes/About.jsx";
import { Layout } from "./layout/index.jsx";
import { Profile } from "./routes/Profile.jsx";
import { SpecificProfile } from "./routes/SpecificProfile.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [{ path: ":name", element: <SpecificProfile /> }],
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "contact",
            element: <h2>This is our contact child path</h2>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
