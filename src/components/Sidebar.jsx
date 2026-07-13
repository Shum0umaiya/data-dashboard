import { Link } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-logo">
        BrewDash
      </Link>

      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          Dashboard
        </Link>

        <a
          href="https://www.openbrewerydb.org/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          Data Source
        </a>
      </nav>

      <div className="sidebar-info">
        <p>Explore brewery trends across the United States.</p>
      </div>
    </aside>
  );
}

export default Sidebar;