import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicList from '../components/MusicCard';

class Album extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <>
        <Header />
        <main data-testid="page-album">
          <MusicList musicId={ id } />
          Texto
        </main>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
