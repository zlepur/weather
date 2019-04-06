import React from "react";
import "spectre.css";
import "./Header.css";

export default function Header(props) {
    return (
        <header className="navbar navshadow">
            <div className="navbar-primary">
                <div className="navbar-brand">
                    <span className="text-large">Wheather App</span>
                </div>
            </div>
            <div className="navbar-section">
                <a href="/about" className="btn btn-link">
                    About
                </a>
            </div>
        </header>
    );
}
