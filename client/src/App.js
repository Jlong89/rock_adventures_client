import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostListContainer from './components/post/PostListContainer';
import ProfileViewContainer from './components/auth/ProfileViewContainer';

import mockPost from './test/mockPost';
import mockUser from './test/mockUser';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostListContainer/>
                <ProfileViewContainer/>
            </div>
        );
    }
}

export default App;
