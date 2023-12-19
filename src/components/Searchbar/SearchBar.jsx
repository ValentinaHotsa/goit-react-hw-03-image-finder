import React, { Component } from 'react';
import css from './searchbar.module.css';

export class SearchBar extends Component {
  state = {
    inputData: '',
  };

  handleChange = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { inputData } = this.state;

    if (inputData === '') {
      alert('Please, enter something to search');
      return;
    }
    this.props.onSubmit(this.state.inputData);
    console.log(this.state);
    this.setState({ inputData: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputData}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
