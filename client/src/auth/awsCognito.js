import AWS from 'aws-sdk';

function cognitoRefresh() {
    AWS.config.credentials.refresh((err, data) => {
        return new Promise((resolve, reject) => {
            if(err) {
                console.log(err);
            } else {
                resolve(AWS.config.credentials.identityId);
            }
        });
    });
}

const cognito = {
    refreshCognitoCreds: cognitoRefresh
}

export {
    cognito
}