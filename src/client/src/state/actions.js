import AWS from 'aws-sdk';

const LOGIN_SUCCESS = 'LOGGIN_SUCCESS';
const ON_FETCH_POSTS_SUCCESS = 'ON_FETCH_POSTS_SUCCESS';

function lambdaFetchPosts() {
    const lambda = new AWS.Lambda();
    const params = {
        FunctionName: 'rockAdventuresLambda',
        Payload: JSON.stringify({})
    };
    return lambda.invoke(params);
}

function onFetchPostsSuccess(posts) {
    return {
        type: ON_FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

function getPosts() {
    return function(dispatch) {
        const req = lambdaFetchPosts();
        req.on('success', (resp) => {
            const payload = JSON.parse(resp.data.Payload);
            const posts = payload.map((hit) => {
                return hit._source;
            });
            dispatch(onFetchPostsSuccess(posts));
        })
        req.on('error', (err) => {
            console.log(err);
        });
        req.send();
    }
}

function onLoginSuccess(user) {
    return (
        {
            type: LOGIN_SUCCESS,
            user: user 
        }
    );
}

const actionTypes = {
    LOGIN_SUCCESS: LOGIN_SUCCESS,
    ON_FETCH_POSTS_SUCCESS: ON_FETCH_POSTS_SUCCESS
}

export {
    actionTypes,
    onLoginSuccess,
    getPosts
}