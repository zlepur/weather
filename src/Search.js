import React from "react";
import "spectre.css";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(evt) {
        if (evt.key === "Enter") this.props.searchLocation(this.state.text);
    }

    onChange(evt) {
        this.setState({ text: evt.target.value });
    }

    render() {
        return (
            <div className="input-group input-inline">
                <input
                    className="form-input"
                    type="text"
                    placeholder="location"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                />
            </div>
        );
    }
}
