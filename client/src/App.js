import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/post/post';

import mockPost from './test/mockPost';
import mockUser from './test/mockUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post post={mockPost} user={mockUser}/>
      </div>
    );
  }
}

export default App;
