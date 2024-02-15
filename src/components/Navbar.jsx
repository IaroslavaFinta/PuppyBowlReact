import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" className="nav">
        Home
      </Link>
      <Link to="/allPlayers" className="nav">
        All Players
      </Link>
      <Link to="/teams" className="nav">
        Teams
      </Link>
      </div>
  );
}
