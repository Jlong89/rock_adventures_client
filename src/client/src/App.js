import React, { Component } from 'react';
import './App.css';
import PostListContainer from './components/post/PostListContainer';
import TopNavBar from './components/nav/TopNavBar';

import { getPosts } from './state/actions';
import { cognito } from './auth/awsCognito';

class App extends Component {

    componentDidMount() {
        cognito.getUnauthCognitoCredentials().then(() => {
            this.props.dispatch(getPosts());
        });
    }

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
