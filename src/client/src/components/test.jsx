import React, {Component} from 'react';

import 'bulma/css/bulma.css';

class TestComponent extends Component {
  render() {
    return (
      <div className="test-component">
          <nav className="level">
            
            <div className="level-left">
                <div className="level-item">
                    <p className="subtitle is-5">
                        ROCK ADVENTURES!
                    </p>
                </div>
            </div>
          </nav>
      </div>
    );
  }
}

TestComponent.displayName = 'TestComponent';

export default TestComponent;
