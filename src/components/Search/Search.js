import React from 'react';
import './Search.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { place: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let place = this.state.place.trim();
    if (place) {
      this.props.addPlace('', place);
      this.setState({place: ''});
    }
  }

  handlePlaceChange(event) {
    this.setState({ place: event.target.value });
  }

  render() {
    return (
      <form
        className="search-field"
        onSubmit={this.handleSubmit}
      >
        <input
          className="placeInput"
          type="text"
          placeholder="Enter place name"
          value={this.state.place}
          onChange={this.handlePlaceChange}
        />
        <span>
          <input
            className="submitInput"
            type="submit"
            value="Add place"
          />
        </span>
      </form>
    );
  }
}
