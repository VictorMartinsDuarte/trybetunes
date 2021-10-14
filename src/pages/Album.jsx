import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <>
        <Header />
        <main data-testid="page-album">
          Album
        </main>
      </>
    );
  }
}

export default Album;
