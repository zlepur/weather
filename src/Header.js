import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "spectre.css";
import "./Header.css";

export default function Header(props) {
    return (
        <header className="navbar navshadow">
            <section className="navbar-primary">
                <div className="navbar-brand">
                    <Link to="/">
                        <span className="text-large">Wheather App</span>
                    </Link>
                </div>
            </section>
            <section className="navbar-section search-section">
                {props.searchLocation && <Search searchLocation={props.searchLocation} />}
            </section>
            <section className="navbar-section">
                <Link to="/about" href="/about" className="btn btn-link">
                    About
                </Link>
            </section>
        </header>
    );
}
