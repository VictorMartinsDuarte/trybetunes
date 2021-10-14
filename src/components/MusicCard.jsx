import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import getMusics from '../services/musicsAPI';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      musicInfo: [],
    };
  }

  componentDidMount() {
    this.handleGetMusics();
  }

  handleGetMusics = async () => {
    const { musicId } = this.props;
    const musicInfo = await getMusics(musicId);
    console.log(musicInfo.slice(1));
    this.setState({
      artistName: musicInfo[0].artistName,
      collectionName: musicInfo[0].collectionName,
      musicInfo,
      //  loading: false,
    });
  }

  handleMap = () => {
    const { musicInfo } = this.state;
    return musicInfo.slice(1).map(({ trackName, previewUrl }) => (
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
      </>
    ));
  }

  render() {
    const { artistName, collectionName } = this.state;
    return (
      <>
        <h1 data-testid="artist-name">{ artistName }</h1>
        <h2 data-testid="album-name">{ collectionName }</h2>
        <div>{ this.handleMap() }</div>
      </>
    );
  }
}

MusicCard.propTypes = {
}.isRequired;

export default MusicCard;
