import { Outlet } from "react-router-dom";
import { Layout } from "../layout";

export function About() {
  return (
    <>
      <h1 className="text-3xl font-bold">New about page!</h1>
      <p>This is our new abour route</p>
      <Outlet />
    </>
  );
}
