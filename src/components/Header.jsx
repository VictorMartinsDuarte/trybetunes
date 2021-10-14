import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: true,
    };

    this.handleGetUser = this.handleGetUser.bind(this);
  }

  componentDidMount() {
    this.handleGetUser();
  }

  async handleGetUser() {
    const username = await getUser();
    const { name } = username;
    this.setState({
      name,
      loading: false,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        {
          loading
            ? <Loading />
            : (
              <p data-testid="header-user-name">
                { name }
              </p>
            )
        }
      </header>
    );
  }
}

export default Header;
