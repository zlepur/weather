import React from "react";
import Search from "./Search";
import "spectre.css";
import "./Header.css";

export default function Header(props) {
    return (
        <header className="navbar navshadow">
            <section className="navbar-primary">
                <div className="navbar-brand">
                    <span className="text-large">Wheather App</span>
                </div>
            </section>
            <section className="navbar-section search-section">
                <Search searchLocation={props.searchLocation} />
            </section>
            <section className="navbar-section">
                <a href="/about" className="btn btn-link">
                    About
                </a>
            </section>
        </header>
    );
}
