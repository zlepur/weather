import React from "react";
import { capitalizeFirstLetter } from "./Utils";

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

export default function WeatherNow(props) {
    if (props.data === null) {
        return (
            <div className="card-header">
                <div className="card-title h3"> Choose a city </div>
                <div className="card-subtitle text-gray" />
                <h6> No data to display </h6>
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
    );
}
