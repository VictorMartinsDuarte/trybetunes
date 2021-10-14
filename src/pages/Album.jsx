import React, { Component } from 'react';
import Header from '../components/Header';
import MusicList from '../components/MusicList';

class Album extends Component {
  render() {
    console.log(this.props)
    const { match: { params } } = this.props;
    return (
      <>
        <Header />
        <main data-testid="page-album">
          {/* <MusicList musicId={ params.id } /> */}
          Texto
        </main>
      </>
    );
  }
}

export default Album;
