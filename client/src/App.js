import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/post/post';
import GoogleSignInButton from './components/auth/google-signin-button';

import mockPost from './test/mockPost';
import mockUser from './test/mockUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post post={mockPost} user={mockUser}/>

        <GoogleSignInButton/>

      </div>
    );
  }
}

export default App;
