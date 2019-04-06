import React from "react";
import WeatherWidget from "./WeatherWidget";
import Header from "./Header";
import "spectre.css";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        };
        this.searchLocation = this.searchLocation.bind(this);
    }

    searchLocation(location) {
        this.setState({ location });
    }

    render() {
        return (
            <div id="app">
                <Header searchLocation={this.searchLocation} />
                <div className="container" id="app-container">
                    <div className="columns">
                        <div className="column col-3" />
                        <div className="column col-6">
                            <WeatherWidget searchLocation={this.state.location} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
