import React from "react";
import "spectre.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.updateText = this.updateText.bind(this);
        this.commitText = this.commitText.bind(this);
    }

    updateText(evt) {
        this.setState({ text: evt.target.value });
    }

    commitText(evt) {
        this.props.searchLocation(this.state.text);
        this.setState({ text: "" });
    }

    render() {
        return (
            <div className="form-group">
                <label className="form-label" htmlFor="input-place">
                    Location
                </label>
                <input
                    className="form-input"
                    type="text"
                    id="input-place"
                    onChange={this.updateText}
                />
                <button
                    className="btn btn-primary input-group-btn"
                    onClick={this.commitText}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default Search;
