import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import Cards from '../components/Cards';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      albumInfo: [],
      loading: false,
      resolve: false,
      searchArtist: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick() {
    const { artistName } = this.state;
    this.setState({ loading: true, searchArtist: artistName }, async () => {
      const arrayAlbumInfo = await searchAlbumsAPI(artistName);
      this.setState({
        loading: false,
        resolve: true,
        artistName: '',
        albumInfo: arrayAlbumInfo,
      });
    });
  }

  renderAlbums = () => {
    const { searchArtist, albumInfo, resolve } = this.state;
    if (resolve && albumInfo.length === 0) {
      return <h1>Nenhum álbum foi encontrado</h1>;
    }
    if (resolve) {
      return (
        <>
          <h1>{`Resultado de álbuns de: ${searchArtist}` }</h1>
          <div>
            {
              albumInfo
                .map((album) => (<Cards
                  key={ album.collectionId }
                  albumObject={ album }
                />))
            }
          </div>
        </>
      );
    }
  }

  render() {
    const { artistName, loading } = this.state;
    const minNameLength = 2;
    return (
      <>
        <Header />
        <main data-testid="page-search">
          <form action="">
            <input
              data-testid="search-artist-input"
              type="text"
              value={ artistName }
              onChange={ this.handleChange }
              name="artistName"
            />
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ artistName.length < minNameLength }
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>

            <section>
              { this.renderAlbums() }
              {
                loading
                  ? <Loading />
                  : <h1>Chegou aqui</h1>
              }
            </section>
          </form>
        </main>
      </>
    );
  }
}

export default Search;
