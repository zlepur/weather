import React from "react";
import "./WeatherWidget.css";
import WeatherNow from "./WeatherNow";
import WeatherFuture from "./WeatherFuture";

function ErrorTemplate(props) {
    return (
        <div className="card weather-widget">
            <h3>{props.error}</h3>
        </div>
    );
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
        if (
            !this.props.searchLocation ||
            this.props.searchLocation.length === 0
        )
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

export default WeatherWidget;
