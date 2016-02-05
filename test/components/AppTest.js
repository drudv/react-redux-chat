/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import React from 'react';
import App from 'components/App';
import makeStore from 'store/makeStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';

describe('App Component', () => {
  let AppComponent;

  it('renders without problems', () => {
    var app = TestUtils.renderIntoDocument(
      <Provider store={makeStore()}>
        <App title="test"/>
      </Provider>
    );
    expect(app).not.to.equal(undefined);
  });
});
