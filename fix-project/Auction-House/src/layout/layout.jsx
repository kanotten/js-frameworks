import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <nav className="flex gap-4 bg-neutral-400">
          <Link to={"/"} className="hover:cursor-pointer hover:text-amber-300">
            Home
          </Link>
        </nav>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}
