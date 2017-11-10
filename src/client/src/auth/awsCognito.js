import AWS from 'aws-sdk';
import config from '../config';

function cognitoRefresh() {
    return AWS.config.credentials.getPromise();
}

function getUnauthCognitoCredentials() {
    
    const newCredentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: config.aws_cognito.poolId,
    });
    
    newCredentials.clearCachedId();
    AWS.config.update({
        region: 'us-west-2',
        credentials: newCredentials
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