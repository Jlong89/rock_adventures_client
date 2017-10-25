import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AWS from 'aws-sdk';

//import googleSignIn from '../../auth/googleSignIn';
import 'bulma/css/bulma.css';
import config from '../../config';
import { cognito } from '../../auth/awsCognito';


//TODO should refactor to general button and pass in which auth to use
class GoogleSignInButton extends Component {
    
    constructor(props) {
        super(props);
        this.googleSignIn = this.googleSignIn.bind(this);
    }

    componentDidMount() {
        window.gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.googleSignIn
        });
    }

    googleSignIn(googleUser) {
        const googleToken = googleUser.getAuthResponse().id_token;
        AWS.config.update({
            region: 'us-west-2',
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: config.aws_cognito.poolId,
                Logins: {
                    'accounts.google.com': googleToken
                }
            })
        });
    }

    render() {
        return(
            <div id="g-signin2"></div>
        );
    }
}

function refresh() {
    window.gapi.auth2.getAuthInstance().signIn({
        prompt: 'login'
    }).then((userUpdate) => {
        const creds = AWS.config.credentials;
        const newToken = userUpdate.getAuthResponse().id_token;
        creds.params.Logins['accounts.google.com'] = newToken;
        return cognito.refreshCognitoCreds
    })
}

GoogleSignInButton.displayName = 'GoogleSignInButton';

export default GoogleSignInButton;
