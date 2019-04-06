import React from "react";
import Search from "./Search";
import WeatherWidget from "./WeatherWidget";
import Header from "./Header";
import "spectre.css";
import "./App.css";

class App extends React.Component {
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
        <Header />
        <div className="container" id="app-container">
          <div className="columns">
            <div className="column col-3" />
            <div className="column col-2">
              <Search searchLocation={this.searchLocation} />
            </div>
            <div className="column col-4">
              <WeatherWidget searchLocation={this.state.location} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
