import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index"; //import specific action creator

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    //override default this context by binding it to the component
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //console.log(event.target.value);
    //context (this) must be bound to call setState()
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); //dont refresh browser on submit
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group" action="">
        <input
          className="form-control"
          placeholder="Get a 5 day forecast in your favorite cities"
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

//give component access to action creator
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); //mapDispatchToProps must be the second argument, doesn't care about state
