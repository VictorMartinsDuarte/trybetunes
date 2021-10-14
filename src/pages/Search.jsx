import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <main data-testid="page-search">
          Search
        </main>
      </>
    );
  }
}

export default Search;
