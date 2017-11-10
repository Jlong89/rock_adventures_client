import AWS from 'aws-sdk';

function fetchPosts() {
    const lambda = new AWS.Lambda();
    const params = {
        FunctionName: 'rockAdventuresLambda',
        Payload: JSON.stringify({})
    };
    return new Promise((resolve, reject) => {
        lambda.invoke(params, (err, resp) => {
            if(err) {
                reject(err);
            } else {
                const payload = JSON.parse(resp.Payload);
                const posts = payload.map((hit) => {
                    return hit._source;
                });
                resolve(posts);
            }
        });
    });
}
const lambda = {
    lambdaFetchPosts: fetchPosts
};

export {
    lambda
};
