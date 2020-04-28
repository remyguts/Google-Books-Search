import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="/">
        <h2 className="text-white">Bookshelf</h2>
      </a>
      <div id="navbar">
        <ul className="nav justify-content-end">
          <li className="nav-item" id="home">
            <a className="nav-link text-white" href="/">
              Home
            </a>
          </li>
          <li className="nav-item" id="report">
            <a className="nav-link text-white" href="/saved">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
