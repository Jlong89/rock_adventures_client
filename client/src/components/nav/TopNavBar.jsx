import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import ProfileViewContainer from '../auth/ProfileViewContainer';

class TopNavBar extends Component {
    
    render() {
        return(
            <nav className="navbar" role="navigation">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <ProfileViewContainer/>
                    </div>
                </div>
            </nav>
        )
    }
}

TopNavBar.displayName = 'TopNavBar';

export default TopNavBar;
