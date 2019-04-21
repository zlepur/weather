import React from "react";
import WeatherNow from "./WeatherNow";
import WeatherFuture from "./WeatherFuture";
import "spectre.css";
import "./WeatherWidget.css";

function ErrorTemplate(props) {
    return (
        <div className="card weather-widget">
            <h3>{props.error}</h3>
        </div>
    );
}

export default class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLocation: "",
            nowData: null,
            futureData: null
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
        if (this.props.searchLocation.length === 0) return;

        let error = null;
        let data = await Promise.all(
            ["weather", "forecast"].map(async type => {
                let apiKey = "66a2d99da6ae21428e25bcd526c3ee57";
                let url = `http://api.openweathermap.org/data/2.5/${type}?appid=${apiKey}&q=${
                    this.props.searchLocation
                }&units=metric`;
                let response = await fetch(url);
                if (!response.ok) {
                    if (response.status === 404) {
                        error = "City " + this.props.searchLocation + "was not found.";
                    } else {
                        error = "An error occured, try again later.";
                    }
                    return null;
                }
                return response.json();
            })
        );

        this.setState({
            searchLocation: this.props.searchLocation,
            nowData: data[0],
            error: error,
            futureData: data[1]
        });
    }

    render() {
        if (this.error) return <ErrorTemplate error={this.error} />;
        return (
            <div className="card weather-widget">
                <WeatherNow data={this.state.nowData} />
                <WeatherFuture data={this.state.futureData} />
            </div>
        );
    }
}
