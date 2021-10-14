import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
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
