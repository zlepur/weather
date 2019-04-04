import React from 'react';
import './App.css';
import Search from './Search';
import WeatherWidget from "./WeatherWidget";

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
      <div>
        <Search searchLocation={this.searchLocation} />
        <WeatherWidget searchLocation={this.state.location} />
      </div>
    );
  }
}

export default App;
