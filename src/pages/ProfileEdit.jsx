import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      name: '',
      email: '',
      image: '',
      description: '',
    };
  }

  componentDidMount() {
    this.handleGetUserInfo();
  }

  handleGetUserInfo = async () => {
    const getUserInfo = await getUser();
    const { name, email, image, description } = getUserInfo;
    this.setState({
      loading: false,
      name,
      email,
      image,
      description,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleUpdateUser = async () => {
    this.setState({
      loading: true,
    });
    const { name, email, image, description } = this.state;
    const { history } = this.props;
    const newUser = { name, email, image, description };
    await updateUser(newUser);
    this.setState({
      loading: false,
    });
    history.push('/profile');
  }

  render() {
    const { loading, name, email, image, description } = this.state;
    const buttonBoolean = name !== ''
      && email !== '' && image !== '' && description !== '';
    const renderUserInfo = (
      <main data-testid="page-profile-edit">
        <form action="">
          <input
            data-testid="edit-input-name"
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            required
          />
          <input
            data-testid="edit-input-email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            data-testid="edit-input-description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            required
          />
          <input
            data-testid="edit-input-image"
            type="text"
            name="image"
            value={ image }
            onChange={ this.handleChange }
            required
          />
          <button
            data-testid="edit-button-save"
            type="button"
            disabled={ !buttonBoolean }
            onClick={ this.handleUpdateUser }
          >
            Enviar

          </button>
        </form>
      </main>
    );
    return (
      <>
        <Header />
        {
          loading
            ? <Loading />
            : renderUserInfo
        }
      </>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProfileEdit;
