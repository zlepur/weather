import React from "react";
import "spectre.css";
import "./Header.css";

function Header(props) {
  return (
    <header className="navbar navshadow">
      <div className="navbar-primary">
        <a className="navbar-brand">
          <span className="text-large">Wheather App</span>
        </a>
      </div>
      <div className="navbar-section">
        <a href="#" className="btn btn-link">
          About
        </a>
      </div>
    </header>
  );
}

export default Header;
