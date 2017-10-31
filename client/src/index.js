import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fromJs } from 'immutable';
import { normalize } from 'normalizr';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rockAdventures from './state/reducers';
import { post } from './schema/schemas';

import { cognito } from './auth/awsCognito';
import mockPosts from './test/mockPosts';
import mockUser from './test/mockUser';

//TODO fix temporary unauthenticated cognito login
//const unauthUser;

cognito.setUnauthCognitoCredentials();

let initialState = {
    loggedInUser: null,
    posts: mockPosts
};

let store = createStore(rockAdventures, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
