import "../css/Header.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <Link href="/">KrishiShakti</Link>
      </div>

      <div id="menu-toggle">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="navbar-links nav-links" id="nav-links">
        <Link href="/features">Features</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/news">News</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
