import React, { Component } from 'react';
import './App.css';
import PostListContainer from './components/post/PostListContainer';
import TopNavBar from './components/nav/TopNavBar';

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
