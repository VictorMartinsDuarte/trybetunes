import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <>
        <Header />
        <main data-testid="page-favorites">
          Favorites
        </main>
      </>
    );
  }
}

export default Favorites;
