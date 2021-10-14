import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends Component {
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

  render() {
    const { loading, name, email, image, description } = this.state;
    const renderUserInfo = (
      <main data-testid="page-profile">
        <p>{ name }</p>
        <p>{ email }</p>
        <p>{ description }</p>
        <img data-testid="profile-image" src={ image } alt="" />
        <Link to="/profile/edit">Editar perfil</Link>
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

export default Profile;
