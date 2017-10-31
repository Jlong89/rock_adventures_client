import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostListContainer from './components/post/PostListContainer';
import TopNavBar from './components/nav/TopNavBar';

import mockPost from './test/mockPost';
import mockUser from './test/mockUser';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavBar/>
                <PostListContainer/>
            </div>
        );
    }
}

export default App;
