/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Immutable from 'immutable';
import makeStore from 'store/makeStore';
import {ActionCreators} from 'store/actions';
import defaults from 'store/defaults';
import composeMessage from 'utils/composeMessage';
import prepopulate from 'demo/prepopulate';

describe('store', () => {

  it('is a Redux store', () => {
    const store = makeStore();
    const expectedState = defaults.DEFAULT_STATE;
    const state = store.getState();
    expect(Immutable.is(state, expectedState)).to.be.true;
  });

  it('has the correct reducer', () => {
    const store = makeStore(prepopulate(defaults.DEFAULT_STATE));
    const initialState = store.getState();
    const message = composeMessage({
      channel: 1,
      user: 1,
      body: 'message',
    });
    store.dispatch(ActionCreators.sendMessage(message));
    const state = store.getState();
    const expectedState = initialState.set('messages',
      initialState.get('messages')
        .push(Immutable.fromJS(message))
    );
    expect(Immutable.is(state, expectedState)).to.be.true;
  });

});
