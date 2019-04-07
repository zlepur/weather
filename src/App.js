import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WeatherWidget from "./WeatherWidget";
import Header from "./Header";
import About from "./About";
import "spectre.css";
import "./App.css";

export default function App(props) {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Router>
    );
}

class Home extends React.Component {
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
            <div>
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
