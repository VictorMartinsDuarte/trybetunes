import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicList from './MusicList';

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
    return musicInfo.slice(1).map((musicObj) => (
      <MusicList
        key={ musicObj.trackName }
        musicObj={ musicObj }
      />
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
