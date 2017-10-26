import { connect } from 'react-redux';
import ProfileView from './ProfileView';
import { onLoginSuccess } from '../../state/actions';

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoginSuccess: (user) => {
            dispatch(onLoginSuccess(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);