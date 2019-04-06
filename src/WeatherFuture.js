import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeatherFuture(props) {
    return (
        <div className="card-body">
            <div className="columns">
                {days.map((day, i) => (
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
            <img src="" alt="Sunny" />
            <div>30 °C</div>
        </div>
    );
}
