import React, { Component } from 'react';
import { getMusics } from '../services/musicsAPI';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Cards extends Component {
  componentDidMount() {
    this.handleGetMusics();
  }

  async handleGetMusics() {
    const musicInfo = await getMusics();
    console.log(musicInfo);
    // const { name } = username;
    // this.setState({
    //   name,
    //   loading: false,
    // });
  }

  render() {
    return (
      <h1 data-testid="artist-name"></h1>
    );
  }
}

Cards.propTypes = {
}.isRequired;

export default Cards;
