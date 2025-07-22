import "../css/Header.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <Link href="/">Hello World</Link>
      </div>

      <div id="menu-toggle">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="navbar-links nav-links" id="nav-links">
        <Link href="/">About</Link>
        <Link href="/">Tours</Link>
      </div>
    </nav>
  );
}

export default Navbar;
