'use strict';

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import makeStore from './store/makeStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Defaults from './store/defaults';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

function initialState() {
  if (process.env.NODE_ENV === 'development') {
    let prepopulate = require('./demo/prepopulate').default;
    return prepopulate(Defaults.DEFAULT_STATE);
  }
  return undefined;
}

ReactDOM.render(
  <Provider store={makeStore(initialState())}>
    <App title="Team Zeus" />
  </Provider>,
  document.getElementById('app')
);
