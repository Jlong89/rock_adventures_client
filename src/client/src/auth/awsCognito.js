import AWS from 'aws-sdk';
import config from '../config';

function cognitoRefresh() {
    return AWS.config.credentials.getPromise();
}

function getUnauthCognitoCredentials() {
    AWS.config.region = 'us-west-2';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: config.aws_cognito.poolId
    });
    return AWS.config.credentials.getPromise();
}

const cognito = {
    refreshCognitoCreds: cognitoRefresh,
    getUnauthCognitoCredentials: getUnauthCognitoCredentials
}

export {
    cognito
}