import React from "react";
import "./WeatherWidget.css";
import WeatherClear from "./resources/weather-clear.png";

const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ErrorTemplate(props) {
  return (
    <div className="card weather-widget">
      <h3>{props.error}</h3>
    </div>
  );
}

function windDirectionToText(degree) {
  if (degree > 337.5) return "N";
  if (degree > 292.5) return "NW";
  if (degree > 247.5) return "W";
  if (degree > 202.5) return "SW";
  if (degree > 157.5) return "S";
  if (degree > 122.5) return "SE";
  if (degree > 67.5) return "E";
  if (degree > 22.5) return "NE";
  return "N";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: "",
      location: "",
      nowData: null
    };
    this.error = null;
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.searchLocation === prevProps.searchLocation) return;
    await this.updateLocation();
  }

  async componentDidMount() {
    await this.updateLocation();
  }

  async updateLocation() {
    if (!this.props.searchLocation || this.props.searchLocation.length === 0)
      return;
    let url = `http://api.openweathermap.org/data/2.5/weather?appid=66a2d99da6ae21428e25bcd526c3ee57&q=${
      this.props.searchLocation
    }&units=metric`;
    let response = await fetch(url);
    if (!response.ok) {
      let error;
      if (response.status === 404) {
        error = "City " + this.props.searchLocation + "was not found.";
      } else {
        error = "An error occured, try again later.";
      }
      this.setState({ error: error, nowData: null });
      return;
    }

    let json = await response.json();
    this.setState(() => ({
      searchLocation: this.props.searchLocation,
      nowData: json,
      error: null
    }));
  }

  render() {
    if (this.error) return <ErrorTemplate error={this.error} />;
    return (
      <div className="card weather-widget">
        <WeatherNow data={this.state.nowData} />
        <WeatherFuture />
      </div>
    );
  }
}

function WeatherNow(props) {
  if (props.data === null) {
    return (
      <div>
        <div className="card-header">
          <div className="card-title h3"> Choose a city </div>
          <div className="card-subtitle text-gray"> No data </div>
          <h4> No data </h4>
        </div>
      </div>
    );
  }

  let city = props.data.name;
  let temp = props.data.main.temp;
  let windDirection = windDirectionToText(props.data.wind.deg);
  let windSpeed = props.data.wind.speed;
  let weatherDesc = capitalizeFirstLetter(props.data.weather[0].description);
  let icon = props.data.weather[0].icon;
  if (temp) {
    temp = Math.round(temp);
  }

  return (
    <div>
      <div className="card-header">
        <img
          src={"http://openweathermap.org/img/w/" + icon + ".png"}
          className="img-responsive float-right"
          alt="Sunny"
        />
        <div className="card-title h3"> {city} </div>
        <div className="card-subtitle text-gray">
          {weatherDesc}, wind {windDirection} {windSpeed} km/h
        </div>
        <h4>{temp} °C</h4>
      </div>
    </div>
  );
}

function WeatherFuture(props) {
  return (
    <div className="card-body">
      <div className="columns">
        {Days.map((day, i) => (
          <WeatherItem key={day} day={day} />
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
