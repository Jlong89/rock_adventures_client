import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rockAdventures from './state/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
