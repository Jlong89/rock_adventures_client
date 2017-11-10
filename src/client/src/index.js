import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { fromJs } from 'immutable';
//import { normalize } from 'normalizr';
import thunk from 'redux-thunk';

import './index.css';
import AppConnector from './AppConnector';

import rockAdventures from './state/reducers';
import { cognito } from './auth/awsCognito';
import { lambda } from './awsLambda';

import registerServiceWorker from './registerServiceWorker';
//TODO fix temporary unauthenticated cognito login
//const unauthUser;
let initialState = {
    loggedInUser: null,
    posts: [] 
};

cognito.getUnauthCognitoCredentials().then(() => {
    return lambda.lambdaFetchPosts();
}).then((posts) => {
    if(posts && posts.length !== 0) {
        initialState.posts = posts;
    }
    let store = createStore(rockAdventures, initialState, applyMiddleware(thunk));

    ReactDOM.render(
        <Provider store={store}>
            <AppConnector/>
        </Provider>,
        document.getElementById('root')
    );
});

registerServiceWorker();
