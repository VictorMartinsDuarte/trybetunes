import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }


  render() {
    return (
      <>
        <Header />
        <main data-testid="page-profile">
          Profile
        </main>
      </>
    );
  }
}

export default Profile;
