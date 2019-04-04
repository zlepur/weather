import React from "react";

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
      <div>
        <input onChange={this.updateText} />
        <button onClick={this.commitText}>Search</button>
      </div>
    );
  }
}

export default Search;