import { actionTypes } from './actions';

const initialState = {
}

function rockAdventures(state = initialState, action) {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loggedInUser: action.user
            });
        case actionTypes.ON_FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, {
                posts: action.posts
            });
        default:
            return state;
    }
}

export default rockAdventures;
