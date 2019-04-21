import React from "react";
import { parse, format, isToday } from "date-fns";
import "spectre.css";

export default function WeatherFuture(props) {
    if (props.data === null) {
        return <div />;
    }
    let data = [];
    for (let weatherData of props.data.list) {
        let date = parse(weatherData.dt_txt);
        if (isToday(date)) continue;
        let day = format(date, "ddd");
        if (data.find(value => value.day === day)) continue;

        let maxTemp = Math.round(weatherData.main.temp_max);
        let minTemp = Math.round(weatherData.main.temp_min);
        let icon = weatherData.weather[0].icon;
        let desc = weatherData.weather[0].main;
        data.push({ day, maxTemp, minTemp, icon, desc });
    }
    return (
        <div className="card-body">
            <div className="columns">
                <div className="column col-1" />
                {data.map(dayData => (
                    <WeatherItem key={dayData.day} data={dayData} />
                ))}
            </div>
        </div>
    );
}

export function WeatherItem(props) {
    return (
        <div className="column col-2 text-center">
            <div>{props.data.day}</div>
            <img
                src={"http://openweathermap.org/img/w/" + props.data.icon + ".png"}
                alt={props.data.desc}
            />
            <div>
                Min: <b>{props.data.minTemp} °C</b>
            </div>
            <div>
                Max: <b>{props.data.maxTemp} °C</b>
            </div>
        </div>
    );
}
