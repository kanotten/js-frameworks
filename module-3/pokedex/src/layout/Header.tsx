import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"} className="text-blue-700">
          Home
        </Link>
      </nav>
    </header>
  );
}
