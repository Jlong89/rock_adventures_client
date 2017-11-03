import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { fromJs } from 'immutable';
import { normalize } from 'normalizr';
import thunk from 'redux-thunk';

import './index.css';
import AppConnector from './AppConnector';

import rockAdventures from './state/reducers';
import { post } from './schema/schemas';
import { cognito } from './auth/awsCognito';
import mockPosts from './test/mockPosts';
import mockUser from './test/mockUser';
import AWS from 'aws-sdk';
import esService from './esService';

import registerServiceWorker from './registerServiceWorker';
//TODO fix temporary unauthenticated cognito login
//const unauthUser;

//cognito.getUnauthCognitoCredentials();

let initialState = {
    loggedInUser: null,
    posts: [] 
};

let store = createStore(rockAdventures, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppConnector/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
