import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';
// Obs.: Feito com ajuda do Matheus L. e Michael C.

class Login extends Component {
  constructor() {
    super();
    this.state = {
      // disabled: true,
      name: '',
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    // const minNameLength = 3;
    this.setState({ name: target.value });
    // return target.value.length >= minNameLength && this.setState({ disabled: false });
  }

  async handleUser(name) {
    const { history } = this.props;
    this.setState({ loading: true });
    await createUser({ name });
    history.push('/search');
  }

  render() {
    const { name, loading } = this.state;
    const minNameLength = 3;
    const inputButton = (
      <>
        <input
          data-testid="login-name-input"
          type="text"
          onChange={ this.handleChange }
          value={ name }
        />
        <button
          data-testid="login-submit-button"
          type="button"
          disabled={ name.length < minNameLength }
          onClick={ () => this.handleUser(name) }
        >
          Entrar
        </button>
      </>
    );
    return (
      <main data-testid="page-login">
        <form>
          {
            loading
              ? <Loading />
              : inputButton
          }
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
