import AWS from 'aws-sdk';

function cognitoRefresh() {
    return AWS.config.credentials.getPromise();
}

const cognito = {
    refreshCognitoCreds: cognitoRefresh
}

export {
    cognito
}