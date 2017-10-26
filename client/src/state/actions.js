const LOGIN_SUCCESS = 'LOGGIN_SUCCESS';

function onLoginSuccess(user) {
    return (
        {
            type: LOGIN_SUCCESS,
            user: user 
        }
    );
}

const actionTypes = {
    LOGIN_SUCCESS: LOGIN_SUCCESS
}

export {
    actionTypes,
    onLoginSuccess
}