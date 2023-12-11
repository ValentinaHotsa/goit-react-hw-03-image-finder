// https://pixabay.com/api/?q=cat&page=1&key=40344925-ced1c275c1243101e1d196b12&image_type=photo&orientation=horizontal&per_page=12
import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    galleryImg: '',
  };

  handleChange = e => {
    this.setState({ galleryImg: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.galleryImg.trim() === '') {
      alert('Please, enter something to search');
      return;
    }
    this.props.onSubmit(this.state.galleryImg);
    this.setState({ galleryImg: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.galleryImg}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
