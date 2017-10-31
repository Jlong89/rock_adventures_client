import AWS from 'aws-sdk';
import config from '../config';

function cognitoRefresh() {
    return AWS.config.credentials.getPromise();
}

function setUnauthCognitoCredentials() {
    AWS.config.region = 'us-west-2';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: config.aws_cognito.poolId
    });
    console.log(AWS.config.credentials.identityId);
}

const cognito = {
    refreshCognitoCreds: cognitoRefresh,
    setUnauthCognitoCredentials: setUnauthCognitoCredentials
}

export {
    cognito
}