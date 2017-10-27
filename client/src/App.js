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
                <nav className="navbar" role="navigation">
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <ProfileViewContainer/>
                        </div>
                    </div>
                </nav>
                
                <PostListContainer/>
                
            </div>
        );
    }
}

export default App;
