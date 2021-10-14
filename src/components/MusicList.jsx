import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loading from './Loading';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checkbox: false,
    };
  }

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleFavoriteSong = async ({ target: { checked } }) => {
    const { musicObj } = this.props;
    this.setState({
      loading: true,
    });

    if (checked === true) {
      await addSong(musicObj);
      this.setState({
        loading: false,
        checkbox: true,
      });
    } else {
      await removeSong(musicObj);
      this.setState({
        loading: false,
        checkbox: false,
      });
    }
  }

  handleLocalStorage = async () => {
    const { musicObj: { trackId } } = this.props;
    const storageFavSongs = await getFavoriteSongs();
    const boolSome = storageFavSongs.some((storage) => storage.trackId === trackId);
    if (boolSome === true) {
      this.setState({
        checkbox: true,
      });
    }
  }

  render() {
    const { musicObj: { trackName, previewUrl, trackId } } = this.props;
    const { loading, checkbox } = this.state;
    const renderMusicList = (
      <>
        <p>{ trackName }</p>
        <audio
          data-testid="audio-component"
          key={ trackName }
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            checked={ checkbox }
            id={ trackId }
            onChange={ this.handleFavoriteSong }
          />
        </label>
      </>
    );

    return (loading ? <Loading /> : renderMusicList);
  }
}

MusicList.propTypes = {
  musicObj: PropTypes.shape({
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicList;
