import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      musicName: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { musicName } = this.state;
    const minNameLength = 2;
    return (
      <>
        <Header />
        <main data-testid="page-search">
          <form action="">
            <input
              data-testid="search-artist-input"
              type="text"
              onChange={ this.handleChange }
              value={ musicName }
              name="musicName"
            />
            <button
              data-testid="search-artist-button"
              type="submit"
              disabled={ musicName.length < minNameLength }
            >
              Pesquisar

            </button>
          </form>
        </main>
      </>
    );
  }
}

export default Search;
