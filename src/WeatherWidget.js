import React from "react";
import "./WeatherWidget.css";
import WeatherClear from "./resources/weather-clear.png";

const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: "",
      location: "",
      data: null
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.searchLocation === prevProps.searchLocation) return;
    this.updateLocation();
  }

  componentDidMount() {
    this.updateLocation();
  }

  updateLocation() {
    console.log(this.props.location);
    // XXX fetch JSON, schedule setState with results
    this.setState(() => ({
      searchLocation: this.props.searchLocation
    }));
  }

  render() {
    return (
      <div className="card weather-widget">
        <WeatherNow />
        <WeatherFuture />
      </div>
    );
  }
}

function WeatherNow(props) {
  return (
    <div>
      <div className="card-header">
        <img
          src={WeatherClear}
          className="img-responsive float-right"
          alt="Sunny"
        />
        <div className="card-title h3"> Zagreb </div>
        <div className="card-subtitle text-gray">Sunny, Wind NE 5 km/h</div>
        <h4>20 °C</h4>
      </div>
    </div>
  );
}

function WeatherFuture(props) {
  return (
    <div className="card-body">
      <div className="columns">
        {Days.map((day, i) => (
          <WeatherItem day={day} />
        ))}
      </div>
    </div>
  );
}

function WeatherItem(props) {
  return (
    <div className="column col-2 text-center">
      <div>{props.day}</div>
      <img src={WeatherClear} alt="Sunny" />
      <div>30 °C</div>
    </div>
  );
}

export default WeatherWidget;
