import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleSignInButton from './GoogleSignInButton';

import 'bulma/css/bulma.css';


class ProfileView extends Component {
    
   render() {
       const { loggedInUser, onLoginSuccess } = this.props;

       if(loggedInUser) {
           return (
            <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-32x32">
                                <img src={loggedInUser.userImageUrl} alt="Image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <strong>{loggedInUser.userName}</strong>
                            </div>
                        </div>
                    </article>
                </div>  
           );
       } else {
           return(
                <div className="box">
                    <GoogleSignInButton onLoginSuccess={onLoginSuccess}/>
                </div>
            );
       }
   } 
}

//TODO add proptypes

ProfileView.displayName = 'ProfileView';

export default ProfileView;