import React from "react";
import "./WeatherWidget.css";
import WeatherClear from "./resources/weather-clear.png";

const Days = [];

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
        <WeatherNowDetails />
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
        <div className="card-title h5"> Zagreb </div>
        <div className="card-subtitle text-gray">Sunny</div>
      </div>
    </div>
  );
}

function WeatherNowDetails(props) {
  return (
    <div>
      <h4> Temp </h4> <p> Date </p> <img /> <p> Wind </p>{" "}
    </div>
  );
}

function WeatherFuture(props) {
  return (
    <div>
      {" "}
      {Days.map((day, i) => (
        <WeatherItem text={day} />
      ))}{" "}
    </div>
  );
}

function WeatherItem(props) {
  return (
    <div>
      <p> Day </p> <img /> <p> Temp </p>
    </div>
  );
}

export default WeatherWidget;
