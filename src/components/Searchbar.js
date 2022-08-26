import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    term: "",
  };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search bar</label>
            <input
              type="text"
              onChange={this.onInputChange}
              placeholder="Enter Videos ...."
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
