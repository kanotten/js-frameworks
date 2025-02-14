import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/" className="mx-4 text-blue-500">
        Home
      </Link>
      <Link to="/profile" className="mx-4 text-blue-500">
        Profile
      </Link>
      <Link to="/about" className="mx-4 text-blue-500">
        About
      </Link>
    </header>
  );
}
