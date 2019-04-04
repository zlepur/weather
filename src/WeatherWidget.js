import React from "react";

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
      <div>
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
      <h3> Zagreb </h3> <image> Sunny, cloudy... </image> <p> Time label </p>{" "}
    </div>
  );
}

function WeatherNowDetails(props) {
  return (
    <div>
      <h4> Temp </h4> <p> Date </p> <image> Img </image> <p> Wind </p>{" "}
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
      <p> Day </p> <image> Icon </image> <p> Temp </p>{" "}
    </div>
  );
}

export default WeatherWidget;