import React from "react";
import "spectre.css";
import Header from "./Header";

export default function About() {
    return (
        <div>
            <Header searchLocation={null} />
            <div className="container" id="app-container">
                <div className="columns">
                    <div className="column col-4" />
                    <div className="column col-4">
                        <p>
                            A simple React.js application using data from OpenWeatherMap (API key is
                            embedded in application for simplicity.)
                        </p>
                        <p>
                            This projects depends on spectre.css, date-fns and react-router
                            libraries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
